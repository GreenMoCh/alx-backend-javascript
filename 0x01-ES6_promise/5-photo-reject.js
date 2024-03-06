export default function uploadPhoto(filename) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`${filename} cannot be processed`));
        }, 1000);
    });
}
