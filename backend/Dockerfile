FROM debian:bookworm-slim

# Install system dependencies and Wine
RUN dpkg --add-architecture i386 \
  && apt-get update \
  && apt-get install -y --no-install-recommends \
    wget gnupg ca-certificates software-properties-common \
  && wget -qO /tmp/winehq.key https://dl.winehq.org/wine-builds/winehq.key \
  && gpg --dearmor /tmp/winehq.key > /etc/apt/trusted.gpg.d/winehq.gpg \
  && echo "deb https://dl.winehq.org/wine-builds/debian/ bookworm main" \
    > /etc/apt/sources.list.d/winehq.list \
  && apt-get update \
  && apt-get install -y --install-recommends winehq-stable \
  && apt-get install -y --no-install-recommends \
    xvfb \
    x11vnc \
    novnc \
    websockify \
    supervisor \
    libgl1-mesa-dri \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libdbus-1-3 \
    fonts-dejavu-core \
  && rm -rf /var/lib/apt/lists/*

# Set up Wine environment
ENV DISPLAY=:99
ENV WINEPREFIX=/root/.wine64
ENV WINEARCH=win64
ENV WINEDEBUG=-all
ENV WINEDLLOVERRIDES="winemenubuilder.exe=d;mono=disabled;gecko=disabled"
ENV DXVK_LOG_LEVEL=none

# Copy the extracted CAD screener application (self-contained with all DLLs)
COPY CAD-Colour-Vision-Screener/ /opt/cad-screener/

# Copy startup scripts
COPY start.sh /start.sh
COPY init-wine.sh /init-wine.sh
RUN chmod +x /start.sh /init-wine.sh

# Pre-initialize Wine prefix during build (speeds up first launch)
RUN /init-wine.sh

# Expose noVNC websocket port
EXPOSE 6080

CMD ["/start.sh"]
