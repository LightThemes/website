window.onkeyup = keyup;
var inputTextValue;

function clearInput() {
  document.getElementById("searchTxt").value = "";
}

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    return
  } else {
    clearInput();
  }
});

function search(e) {
  inputTextValue = e.target.value;
  if (inputTextValue == "twitch") {
    window.open("https://twitch.tv", "_blank");
    clearInput();
  } else if (inputTextValue == "youtube") {
    window.open("https://www.youtube.com", "_blank");
    clearInput();
  } else if (inputTextValue == "osu") {
    window.open("https://osu.ppy.sh/users/16780466", "_blank");
    clearInput();
  } else if (inputTextValue == "market") {
    window.open("https://warframe.market", "_blank");
    clearInput();
  } else if (inputTextValue == "tiers") {
    window.open("https://overframe.gg/tier-list/melee-weapons", "_blank");
    clearInput();
  } else if (inputTextValue == "wiki") {
    window.open("https://warframe.fandom.com/wiki/WARFRAME_Wiki", "_blank");
    clearInput();
  } else if (inputTextValue == "xqc") {
    window.open("https://twitch.tv/xqc", "_blank");
    clearInput();
  } else if (inputTextValue == "poke") {
    window.open("https://twitch.tv/pokelawls", "_blank");
    clearInput();
  } else {
    window.open("https://www.google.com/search?q=" + inputTextValue, "_blank");
    clearInput();
  }
}

function keyup(e) {
  inputTextValue = e.target.value;
  if (e.keyCode == 13) {
    if (inputTextValue == "") {
      return
    } else {
      search(e);
    }
  }
}
