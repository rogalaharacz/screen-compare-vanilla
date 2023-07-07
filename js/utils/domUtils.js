const c = console.log.bind(document); // DEV

/**
 * Adds an event listener to the specified element
 * that listens for the "Escape" keydown event.
 * When the "Escape" key is pressed, the element loses focus.
 *
 * @param {HTMLElement} element - The element to add the event listener to.
 */
const handleEscapeFocusOut = (element) => {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.target.blur();
    }
  });
};

/**
 * Toggles between light and dark mode for the website
 * and updates the cookie to remember the user's preference.
 */
const handleDarkModeSwitch = () => {
  const darkModeSwitch = document.querySelector(".switch-mode");

  if (!document.body.classList.contains("light-mode")) {
    darkModeSwitch.src = "assets/icons/Icons/dark-mode.svg";
    if (document.cookie.includes("cookiesAccepted=true")) {
      document.cookie = "lightMode=true; max-age=31536000;";
    }
  } else {
    darkModeSwitch.src = "assets/icons/Icons/light-mode.svg";
    if (document.cookie.includes("cookiesAccepted=true")) {
      document.cookie = "lightMode=false; max-age=31536000;";
    }
  }
  document.body.classList.toggle("light-mode");
};

/**
 * Updates the year in the copyright notice to the current year.
 */
const updateYear = () => {
  const copyright = document.querySelector(".copyright");
  const year = new Date().getFullYear().toString();

  copyright.textContent = `ScreenCompare \u00A9 ${year}`;
};

const setCheckingInternetConnection = () => {
  setInterval(() => {
    if (!navigator.onLine) {
      c("No Internet Connection");
    }
  }, 5000);
};

const isScriptLoaded = (url) => {
  return Array.from(document.getElementsByTagName("script")).some((script) => script.src === url);
};

const addScript = (source) => {
  if (!isScriptLoaded(source)) {
    let scriptTag = document.createElement("script");
    scriptTag.src = source;
    document.body.appendChild(scriptTag);
  }
};

export {
  handleEscapeFocusOut,
  handleDarkModeSwitch,
  updateYear,
  setCheckingInternetConnection,
  addScript,
};
