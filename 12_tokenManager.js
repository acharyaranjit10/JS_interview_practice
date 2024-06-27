// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token,expirationMinutes){
const expireTime = Date.now()+expirationMinutes*60*1000;

    localStorage.setItem("authToken",token);
    localStorage.setItem("authExpiry",expireTime);
}

const token = "a1b2c3";
const expirationMinutes = 60; // The token should expire in 60 minutes
setAuthToken(token, expirationMinutes);