#!/bin/bash
# Pre-initialize Wine64 prefix during Docker build
# This runs at build time so the first user doesn't wait for Wine init

export DISPLAY=:99
export WINEPREFIX=/root/.wine64
export WINEARCH=win64
export WINEDEBUG=-all
export WINEDLLOVERRIDES="winemenubuilder.exe=d;mono=disabled;gecko=disabled"

# Need a virtual display even during build
Xvfb :99 -screen 0 1280x960x24 -nolisten tcp &
XVFB_PID=$!
sleep 2

# Initialize Wine prefix
wineboot --init 2>/dev/null || true
sleep 3

# Kill the temp display
kill $XVFB_PID 2>/dev/null || true

echo "Wine prefix initialized."
