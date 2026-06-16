# 🚀 Ziphay Browser SDK

Official JavaScript Browser SDK for Ziphay AI.

Ziphay Browser SDK is a lightweight, high-performance client-side toolkit that enables developers to compress, optimize, convert, and manage files directly inside the browser — with no servers, no API requests, and no API keys required.

---

## ✨ Features

🖼️ Advanced image compression and optimization
📐 Image resizing with custom dimensions
🔄 Image format conversion (JPEG, PNG, WebP)
📄 Detailed file information utilities
🔤 Base64 and Blob conversion helpers
📥 Easy file download utilities
🔒 100% private client-side processing
⚡ Fast and lightweight architecture
🚫 No API key or account required

---

## 📦 Installation

Install the latest beta release:

```bash
npm install @nameisabhay2030/ziphay-browser-sdk@beta
```

---

## 🚀 Quick Start

Import the SDK:

```javascript
import {
    compressImage,
    getFileInfo,
    downloadFile
} from "@nameisabhay2030/ziphay-browser-sdk";
```

Compress an image:

```javascript
const compressedImage = await compressImage(file, {
    quality: 0.7,
    maxWidth: 1200,
    format: "image/webp"
});

console.log(getFileInfo(compressedImage));

downloadFile(compressedImage);
```

---

## 📚 API Reference

### compressImage()

Compresses and optimizes an image while optionally resizing and converting its format.

Example:

```javascript
const result = await compressImage(file, {
    quality: 0.8,
    maxWidth: 1920,
    maxHeight: 1080,
    format: "image/jpeg"
});
```

Options:

| Option    | Type   | Default    | Description               |
| --------- | ------ | ---------- | ------------------------- |
| quality   | Number | 0.8        | Compression quality (0–1) |
| maxWidth  | Number | 1920       | Maximum image width       |
| maxHeight | Number | 1080       | Maximum image height      |
| format    | String | image/jpeg | Output MIME type          |

---

### resizeImage()

Resizes an image to specified dimensions.

```javascript
resizeImage(file, width, height);
```

---

### convertImageFormat()

Converts an image to a different format.

```javascript
convertImageFormat(file, "image/webp");
```

---

### getFileInfo()

Returns useful metadata about a file.

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

## 🛠 Utility Functions

### File Conversion

`fileToBase64()`
`base64ToBlob()`
`blobToFile()`

### File Utilities

`formatBytes()`
`calculateCompression()`
`downloadFile()`
`isFileSizeValid()`
`isImage()`
`generateID()`

---

## 📂 Project Structure

```text
ziphay-browser-sdk/
│
├── src/
│   ├── index.js
│   ├── image.js
│   ├── file.js
│   ├── converter.js
│   └── utils.js
│
├── examples/
│   ├── react-example.js
│   └── vanilla-example.html
│
├── tests/
│
├── package.json
├── README.md
└── LICENSE
```

---

## 🌐 Browser Support

Ziphay Browser SDK supports all modern browsers:

Google Chrome
Microsoft Edge
Mozilla Firefox
Safari

---

## 🔐 Privacy & Security

Your privacy comes first.

All file processing happens entirely inside your browser.

Your files are:

❌ Never uploaded to any server
❌ Never stored in a database
❌ Never shared with third-party APIs

Everything remains local on your device.

---

## 🗺️ Roadmap

### v0.2.0

Batch image compression
Support for additional image formats
Improved optimization algorithms

### v0.5.0

PDF compression and utilities
Video optimization tools
Drag-and-drop UI components

### v1.0.0

Stable production release
Full TypeScript support
Official React components
Advanced media optimization engine

---

## 🐛 Reporting Issues

Found a bug or have a feature request?

Please open an issue on GitHub:

https://github.com/Abhay2030/ziphay-browser-sdk/issues

---

## 📄 License

MIT License

Copyright (c) 2026 Abhay

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## ❤️ About Ziphay AI

Ziphay AI is a next-generation file optimization platform focused on intelligent compression, media enhancement, and developer-friendly tools.

Website:

https://ziphay-smart-compression.vercel.app


