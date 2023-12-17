// Function to set a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
  const d = new Date();
  d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Function to check if the user has visited before
function checkVisit() {
  const visited = getCookie("visited");
  if (visited !== "") {
    // User has visited before, do nothing
    return;
  } else {
    // Set cookie to mark the user's visit
    setCookie("visited", "true", 1/24); // 1 hour (1/24 of a day)
 // Cookie expires in 30 days
loadCSS("shield.css");
    // Create and display the overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 24px;
      z-index: 9999;
      animation: blink 1s infinite;
    `;
    overlay.innerHTML = "<span id='blinkText'>DDoS Protection by me</span>";
    document.body.appendChild(overlay);

    // Remove the overlay after 5 seconds
    setTimeout(() => {
      overlay.style.display = "none";
    }, 5000);
  }
}

// Call the function to check the visit status
checkVisit();
