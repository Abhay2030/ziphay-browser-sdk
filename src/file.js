/**
 * Ziphay Browser SDK
 * File information utilities
 */

export function getFileInfo(file) {

    return {
        name: file.name,
        type: file.type,
        size: file.size,
        sizeKB: (file.size / 1024).toFixed(2),
        sizeMB: (file.size / 1024 / 1024).toFixed(2),
        lastModified: new Date(file.lastModified)
    };
}


export function formatBytes(bytes) {

    if (!bytes) {
        return "0 Bytes";
    }

    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB"
    ];

    let size = bytes;
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
        size /= 1024;
        index++;
    }

    return `${size.toFixed(2)} ${units[index]}`;
}


export function calculateCompression(
    originalSize,
    newSize
) {

    const saved =
        originalSize - newSize;

    return {
        original: formatBytes(originalSize),
        compressed: formatBytes(newSize),
        saved: formatBytes(saved),
        percentage:
            (
                saved /
                originalSize * 100
            ).toFixed(2)
            + "%"
    };
}