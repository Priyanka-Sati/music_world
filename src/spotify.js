// documentation
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// we have used the authentication in which we send the data to spotify and then it take case of all the authentications for login
// sot this is the endpoint for that 
// as soon as click login button
// redirect to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirect uri
// as soon spotify login it will redirect to our url
const redirectUri = "http://localhost:3000/";

const clientId = "c11fd965f5ec433881ab51f5e64f8b9b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// pulling access token out from url after login
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial; 
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;