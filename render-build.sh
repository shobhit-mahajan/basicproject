#!/usr/bin/env bash

# Install missing dependencies for Playwright
apt-get update && apt-get install -y \
    libenchant-2-2 \
    libsecret-1-0 \
    libmanette-0.2-0 \
    libGLESv2-2 \
    libgstreamer-gl1.0-0 \
    gstreamer1.0-libav \
    libgstreamer-plugins-bad1.0-0
