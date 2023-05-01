function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameWithEquals = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameWithEquals) === 0) {
            return cookie.substring(nameWithEquals.length, cookie.length);
        }
    }
    return "";
}

function checkCookie() {
    const consent = getCookie("cookieConsent");
    const popup = document.getElementById("cookie-popup");

    if (consent === "") {
        popup.style.display = "block";
    }
}

document.getElementById("accept-cookies").addEventListener("click", function() {
    setCookie("cookieConsent", "accepted", 30);
    document.getElementById("cookie-popup").style.display = "none";
});

checkCookie();
