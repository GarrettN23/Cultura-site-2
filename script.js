// ==========================
// COOKIE POPUP LOGIC
// ==========================

// Show cookie popup if not accepted before
window.onload = function () {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-box").style.display = "block";
    }
};

// Accept Cookies
function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-box").style.display = "none";
}

// Deny Cookies
function denyCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    document.getElementById("cookie-box").style.display = "none";
}


// ==========================
// SIGNUP BUTTON (FAKE PAGE)
// ==========================

function goToSignup() {
    window.location.href = "signup.html";
}

