# CAD Screener Backend

Docker container that runs the CAD Colour Vision Screener (a Windows 64-bit application) via Wine64, streams the display via noVNC over WebSocket to the browser.

## Stack

- **Wine 64-bit (stable)** — runs the Windows exe on Linux
- **Xvfb** — virtual framebuffer X server (no physical display needed)
- **x11vnc** — VNC server attached to the Xvfb display
- **noVNC + websockify** — browser-accessible VNC client via WebSocket

## Deployment (Fly.io)

```bash
# First time setup
fly auth login
fly apps create cad-screener --org personal

# Deploy
fly deploy

# The app will be available at:
# https://cad-screener.fly.dev
# noVNC viewer: https://cad-screener.fly.dev/vnc.html
```

## Local development

```bash
# Build the image
docker build -t cad-screener .

# Run locally
docker run -p 6080:6080 cad-screener

# Open in browser
open http://localhost:6080/vnc.html?autoconnect=true&resize=scale
```

## How it works

1. Container starts Xvfb on display :99 (1280x960 24-bit)
2. x11vnc attaches to that display and listens on localhost:5900
3. websockify proxies WebSocket connections on port 6080 to VNC on 5900
4. noVNC HTML/JS is served from /usr/share/novnc/ via websockify
5. Wine64 launches cad-screener.exe on display :99
6. The app restarts automatically after each test session

## CAD Screener app

The `CAD-Colour-Vision-Screener/` directory contains the extracted files from the
original Inno Setup installer (cad-screener-2.7-1-12.exe). The app is self-contained
with all 91 DLLs bundled, built with GCC/GTK2, and runs well under Wine64.
