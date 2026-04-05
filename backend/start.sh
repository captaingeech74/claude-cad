#!/bin/bash
set -e

export DISPLAY=:99
export WINEPREFIX=/root/.wine64
export WINEARCH=win64
export WINEDEBUG=-all
export WINEDLLOVERRIDES="winemenubuilder.exe=d;mono=disabled;gecko=disabled"
export LIBGL_ALWAYS_SOFTWARE=1
export GALLIUM_DRIVER=llvmpipe
export MESA_GL_VERSION_OVERRIDE=4.5
export DXVK_LOG_LEVEL=none

echo "[CAD Screener] Starting virtual display..."
Xvfb :99 -screen 0 1280x960x24 -nolisten tcp -ac &
XVFB_PID=$!
sleep 1

echo "[CAD Screener] Starting VNC server on port 5900..."
x11vnc \
  -display :99 \
  -forever \
  -nopw \
  -shared \
  -listen 127.0.0.1 \
  -rfbport 5900 \
  -quiet \
  -bg \
  -o /var/log/x11vnc.log

sleep 1

echo "[CAD Screener] Starting noVNC websocket proxy on port 6080..."
websockify \
  --web /usr/share/novnc/ \
  --heartbeat 30 \
  6080 \
  127.0.0.1:5900 \
  >> /var/log/novnc.log 2>&1 &

sleep 1

echo "[CAD Screener] Launching CAD Colour Vision Screener via Wine64..."

# Set a nice background color on the virtual display
DISPLAY=:99 xsetroot -solid "#1e1b4b" 2>/dev/null || true

# Run the screener; restart automatically after each session ends
SESSION_COUNT=0
while true; do
  SESSION_COUNT=$((SESSION_COUNT + 1))
  echo "[CAD Screener] Starting session #$SESSION_COUNT"

  DISPLAY=:99 \
  WINEPREFIX=/root/.wine64 \
  wine64 /opt/cad-screener/cad-screener.exe 2>/var/log/wine.log || true

  echo "[CAD Screener] Session #$SESSION_COUNT ended. Restarting in 3 seconds..."

  # Brief pause + clear the display between sessions
  DISPLAY=:99 xsetroot -solid "#1e1b4b" 2>/dev/null || true
  sleep 3
done
