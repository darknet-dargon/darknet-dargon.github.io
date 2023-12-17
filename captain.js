function setCookie(cookieName, cookieValue, expirationHours) {
  const d = new Date();
  d.setTime(d.getTime() + (expirationHours * 60 * 60 * 1000)); // Multiply by milliseconds in an hour
  const expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to check if the user has visited before
function checkVisit() {
  const visited = getCookie("visited");
  if (visited !== "") {
    // User has visited before, do nothing
    return;
  } else {
    // Set cookie to mark the user's visit for 1 hour
    setCookie("visited", "true", 1); // 1 hour (in hours)

    // Load CSS
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
