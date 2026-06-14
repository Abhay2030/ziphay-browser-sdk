# 🚀 Ziphay Browser SDK

Official JavaScript SDK for Ziphay AI.

A powerful browser-based toolkit for image compression, optimization, format conversion, and file utilities — all running completely on the client-side with no server or API key required.

---

## ✨ Features

- 🖼 Image Compression
- 📏 Image Resizing
- 🔄 JPG, PNG, WebP Conversion
- 📄 File Information & Analysis
- 📦 File Size Calculation
- 🔐 100% Client-side Processing
- ⚡ Fast Performance
- 🧩 Zero Dependencies
- 🚫 No API Key Required

---

## 📦 Installation

Using npm:

```bash
npm install @ziphay/browser-sdk
```

Using yarn:

```bash
yarn add @ziphay/browser-sdk
```

---

# Quick Start

```javascript
import {
    compressImage,
    getFileInfo,
    downloadFile
} from "@ziphay/browser-sdk";


const fileInput =
    document.querySelector("#file");


fileInput.addEventListener(
    "change",
    async (event) => {

        const file =
            event.target.files[0];


        const compressed =
            await compressImage(
                file,
                {
                    quality: 0.7,
                    maxWidth: 1200,
                    format: "image/webp"
                }
            );


        console.log(
            getFileInfo(compressed)
        );


        downloadFile(compressed);

    }
);
```

---

# API Reference

## compressImage()

Compress an image while maintaining quality.

```javascript
compressImage(file, options)
```

Options:

| Option | Type | Default |
|--------|------|---------|
| quality | Number | 0.8 |
| maxWidth | Number | 1920 |
| maxHeight | Number | 1080 |
| format | String | image/jpeg |

---

## resizeImage()

```javascript
resizeImage(file, width, height)
```

---

## convertImageFormat()

```javascript
convertImageFormat(
    file,
    "image/webp"
)
```

---

## getFileInfo()

Returns:

```javascript
{
 name,
 type,
 size,
 sizeKB,
 sizeMB,
 lastModified
}
```

---

## Utilities

- formatBytes()
- calculateCompression()
- fileToBase64()
- base64ToBlob()
- blobToFile()
- downloadFile()
- isImage()
- isFileSizeValid()
- generateID()

---

# Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

# Security

All processing happens locally in the browser.

Your files are never uploaded to any server.

---

# Version

Current Release:

v0.1.0-beta

---

# Roadmap

Upcoming features:

- Video compression
- PDF optimization
- Batch compression
- Drag and drop utilities
- React components
- TypeScript support
- Web Worker optimization

---

# License

MIT License

---

Built with ❤️ by Ziphay AI