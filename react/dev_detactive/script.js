const profile_icon = document.querySelector(".images");
const mode_name = document.querySelector("[data-mode]");
const name1 = document.querySelector("#name");
const username = document.querySelector("[data-username]");
const join = document.querySelector("#joined");
const dec = document.querySelector("[data-dec]");
const rep = document.querySelector("[data-rep]");
const foll = document.querySelector("[data-foll]");
const following = document.querySelector("[data-following]");
const address = document.querySelector("[data-address]");
const twitter = document.querySelector("[data-twitter]");
const link = document.querySelector("[data-linked]");
const Qr = document.querySelector("[data-qr]");
const btn = document.querySelector("[data-btn]");
const input = document.querySelector("[data-input]");
const search_icon = document.querySelector("[data-search_icon]");
const mode_icon = document.querySelector("[data-icon]");
var mode = true;

// console.log(mode);
set_Img("himanshurelhan70");
// https://api.github.com/users/GrandMaster2004...himanshurelhan70
async function set_Img(user_name) {
  const Url = await fetch(`https://api.github.com/users/${user_name}`);
  const data = await Url.json();
  const img = data.avatar_url;
  profile_icon.src = img; 
  // console.log(data);
  name1.innerText = data.name;
  username.innerText = data.login;
  rep.innerText = data.public_repos;
  foll.innerText = data.followers;
  following.innerText = data.following;
  dec.innerText = data.bio;
  address.innerText = data.location;
  twitter.innerText = data.twitter_username;
  link.innerText = data.url;
  Qr.innerText = data.hireable;
  join.innerText = data.created_at;
}

// if(input.focuse){
//     sea
// }
btn.addEventListener("click", () => {
  let name = input.value;
  if (name != "") {
    set_Img(name);
  }
  input.value = "";
});

mode_icon.addEventListener("click", () => {
  const change = document.querySelector(":root");
  const bg = document.getElementById("content");
  const bg_inner = document.getElementById("extra_info");
  const icon_mode = document.getElementById("mode_icon");
  const sun_mode = document.getElementById("sun");
  if (mode) {
    change.style.setProperty("--white_bg", "rgb(22, 24, 43)");
    change.style.setProperty("--white_black", "#ffffff");
    bg.style.setProperty("background", "#1E2A47");
    bg_inner.style.setProperty("background", "#141D2F");
    icon_mode.style.setProperty("display", "none");
    sun_mode.style.setProperty("display", "flex");
  } else {
    change.style.setProperty("--white_bg", "#ffffff");
    change.style.setProperty("--white_black", "rgb(0, 0, 0)");
    bg.style.setProperty("background", "#ffffff");
    bg_inner.style.setProperty("background", "rgb(234, 230, 244)");
    icon_mode.style.setProperty("display", "flex");
    sun_mode.style.setProperty("display", "none");
  }
  mode = !mode;
});
