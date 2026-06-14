/**
 * Ziphay Browser SDK
 * Image compression & optimization engine
 */


/**
 * Load image from file
 */
function loadImage(file) {
    return new Promise((resolve, reject) => {

        const img = new Image();

        img.onload = () => resolve(img);

        img.onerror = () => reject(
            new Error("Invalid image file")
        );

        img.src = URL.createObjectURL(file);
    });
}


/**
 * Compress and resize image
 */
export async function compressImage(
    file,
    options = {}
) {

    const {
        quality = 0.8,
        maxWidth = 1920,
        maxHeight = 1080,
        format = "image/jpeg"
    } = options;


    const image = await loadImage(file);


    const canvas = document.createElement("canvas");

    const context = canvas.getContext("2d");


    let width = image.width;
    let height = image.height;


    // Maintain aspect ratio
    if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
    }


    if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
    }


    canvas.width = width;
    canvas.height = height;


    context.drawImage(
        image,
        0,
        0,
        width,
        height
    );


    return new Promise(resolve => {

        canvas.toBlob(blob => {

            const compressedFile =
                new File(
                    [blob],
                    file.name,
                    {
                        type: format,
                        lastModified: Date.now()
                    }
                );


            resolve(compressedFile);

        }, format, quality);

    });
}



/**
 * Resize image
 */
export async function resizeImage(
    file,
    width,
    height
) {

    return compressImage(file, {
        maxWidth: width,
        maxHeight: height,
        quality: 1
    });
}



/**
 * Convert image format
 */
export async function convertImageFormat(
    file,
    format = "image/webp"
) {

    return compressImage(file, {
        format,
        quality: 1
    });
}



/**
 * Create image preview URL
 */
export function createPreview(file) {

    return URL.createObjectURL(file);
}



/**
 * Remove preview URL from memory
 */
export function removePreview(url) {

    URL.revokeObjectURL(url);
}