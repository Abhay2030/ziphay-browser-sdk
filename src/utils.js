/**
 * Ziphay Browser SDK
 * General utility functions
 */


/**
 * Download file
 */
export function downloadFile(
    file,
    filename = file.name
) {

    const url =
        URL.createObjectURL(file);


    const link =
        document.createElement("a");


    link.href = url;

    link.download = filename;


    document.body
        .appendChild(link);


    link.click();


    link.remove();


    URL.revokeObjectURL(url);
}



/**
 * Generate unique ID
 */
export function generateID() {

    return (
        "ziphay_" +
        Math.random()
            .toString(36)
            .substring(2, 12)
    );
}



/**
 * Check file size
 */
export function isFileSizeValid(
    file,
    maxMB = 10
) {

    const maxBytes =
        maxMB *
        1024 *
        1024;


    return file.size <= maxBytes;
}



/**
 * Validate image file
 */
export function isImage(file) {

    return (
        file.type
            .startsWith("image/")
    );
}



/**
 * Get current Ziphay SDK version
 */
export function version() {

    return "0.1.0-beta";
}