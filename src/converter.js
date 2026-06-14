/**
 * Ziphay Browser SDK
 * File conversion utilities
 */


/**
 * Convert File to Base64
 */
export function fileToBase64(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();


        reader.onload = () => {
            resolve(reader.result);
        };


        reader.onerror = () => {
            reject(
                new Error(
                    "Conversion failed"
                )
            );
        };


        reader.readAsDataURL(file);

    });

}



/**
 * Convert Base64 to Blob
 */
export function base64ToBlob(base64) {

    const parts = base64.split(",");


    const mime =
        parts[0]
            .match(/:(.*?);/)[1];


    const bytes =
        atob(parts[1]);


    let length = bytes.length;


    const array =
        new Uint8Array(length);


    while (length--) {
        array[length] =
            bytes.charCodeAt(length);
    }


    return new Blob(
        [array],
        {
            type: mime
        }
    );
}



/**
 * Convert Blob to File
 */
export function blobToFile(
    blob,
    filename = "file"
) {

    return new File(
        [blob],
        filename,
        {
            type: blob.type,
            lastModified: Date.now()
        }
    );
}