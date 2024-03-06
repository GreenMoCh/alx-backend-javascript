function handleResponseFromAPI(promise) {
    promise
        .then((resolvedValue) => {
            console.log('Got a reponse from the API');
            return new Error();
        });
}

export default handleResponseFromAPI;
