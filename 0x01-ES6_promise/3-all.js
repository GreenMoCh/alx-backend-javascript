import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(([photoResponse, userRsponse]) => {
            const phtot = photoResponse.body || photoResponse;
            const { firstname, lastname } = userRsponse;

            console.log(`${photo} ${firstname} ${lastname}`);
        })
        .catch(error => {
            console.error('Signup system offline', error);
        });
}

export default handleProfileSignup;
