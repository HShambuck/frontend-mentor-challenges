const mediaQuery = window.matchMedia("(min-width: 700px)");

function handleProfileLinksChange(event) {
  let shareLinks = document.getElementById("active-div");
  const profile = document.getElementById("profile-div");
  const main = document.getElementById("main");

  const shareButton = document.getElementById("share-btn");

  if (event.matches) {
    shareLinks.parentElement !== profile && profile.appendChild(shareLinks);

    shareButton.style.display = "none";
  } else {
    shareLinks.parentNode !== main && main.appendChild(shareLinks);
  
    shareButton.style.display = "block";
  }
}

mediaQuery.addEventListener("change", handleProfileLinksChange);

handleProfileLinksChange(mediaQuery);
