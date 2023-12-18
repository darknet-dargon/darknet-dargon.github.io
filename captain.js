function setCookie(name, value, hours) {
      var expires = "";
      if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Function to get the value of a specific cookie by name
    function getCookie(name) {
      var nameEQ = name + "=";
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
        }
      }
      return null;
    }

    // Function to check if the loader should be displayed or not
    function displayLoader() {
      var loaderCookie = getCookie("loaderDisplayed");
      if (!loaderCookie) {
        // Loader is not displayed, so load the loader.html content
        var loaderFrame = document.createElement("iframe");
        loaderFrame.setAttribute("src", "loader.html");
        loaderFrame.setAttribute("id", "loaderFrame");
        loaderFrame.style.position = "fixed";
        loaderFrame.style.top = "0";
        loaderFrame.style.left = "0";
        loaderFrame.style.width = "100%";
        loaderFrame.style.height = "100%";
        loaderFrame.style.border = "none";
        document.body.appendChild(loaderFrame);

        // Set a cookie to indicate that the loader was displayed
        setCookie("loaderDisplayed", "true", 6); // Expires in 6 hours

        // Hide the loader after 5 seconds
        setTimeout(function() {
          var frame = document.getElementById("loaderFrame");
          if (frame) {
            frame.style.display = "none";
          }
        }, 5000); // 5 seconds
      }
    }

    // Call the function to display the loader
    displayLoader();
