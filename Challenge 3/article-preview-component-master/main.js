const mediaQuery = window.matchMedia("(min-width: 700px)");

function handleProfileLinksChange(event) {
  let shareLinks = document.getElementById("active-div");
  const profile = document.getElementById("profile-div");
  const main = document.getElementById("main");

  //Reference the share button and clone it
  const shareButton = document.getElementById("share-btn");
  const newShareButton = shareButton.cloneNode(true);

  if (event.matches) {
    // If screen width is >= 700px
    shareLinks.parentElement !== profile && profile.appendChild(shareLinks);

    //Remove the share button if it exists
    const existingButton = shareLinks.querySelector("#share-btn");
    existingButton && existingButton.remove();
  } else {
    shareLinks.parentNode !== main && main.appendChild(shareLinks);
    !existingButton && shareLinks.appendChild(newShareButton);
  }
}

mediaQuery.addEventListener("change", handleProfileLinksChange);

handleProfileLinksChange(mediaQuery);
