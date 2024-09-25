#!/bin/bash
# This script can be used to set up your environment

# Install required packages
apt-get update
apt-get install -y \
    libnss3 \
    libxss1 \
    libgconf-2-4 \
    libgtk-3-0 \
    libgdk-pixbuf2.0-0 \
    libasound2 \
    libatk1.0-0 \
    libcups2 \
    libdbus-glib-1-2 \
    libenchant-2-2 \
    libsecret-1-0 \
    libmanette-0.2-0 \
    libgstgl-1.0-0 \
    libgstcodecparsers-1.0-0 \
    libgles2 \
    libglib2.0-0 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxrandr2 \
    libxi6 \
    libxtst6
