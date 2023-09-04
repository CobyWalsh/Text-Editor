const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Event listener that listens for the 'beforeinstallprompt' event.
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});

// Sets up a click event listener on a button with the id 'butInstall'. When the button is clicked, it checks if there is a deferred installation prompt, and if on exists, it triggers the prompt to be shown to the user.
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }
  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// Setting up the event listener for the 'appinstalled' event
window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
