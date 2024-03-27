// alert
const alert = document.querySelector("#alert")
const accept = document.querySelector("#accept")
accept.onclick = function (event) {
    event.preventDefault()
    alert.classList.add("hidden")
}

// dark mode
const darkMode = document.querySelector("#darkMode")
const darkMode2 = document.querySelector("#darkMode2")
const darkIcon = document.querySelector("#darkIcon")
const darkIcon2 = document.querySelector("#darkIcon2")
const body = document.querySelector("#body")
const darkStatus1 = document.querySelector("#darkStatus1")
const darkStatus2 = document.querySelector("#darkStatus2")
darkMode.onclick = function (event) {
    event.preventDefault()
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
        darkMode.classList.remove("whiteShadow")
        darkIcon.classList.add("bi-moon-fill")
        darkIcon.classList.remove("bi-brightness-high-fill")
        darkIcon2.classList.add("bi-moon-fill")
        darkIcon2.classList.remove("bi-brightness-high-fill")
        darkStatus1.classList.remove("hidden")
        darkStatus2.classList.add("hidden")
    } else {
        body.classList.add("dark")
        darkMode.classList.add("whiteShadow")
        darkIcon.classList.remove("bi-moon-fill")
        darkIcon.classList.add("bi-brightness-high-fill")
        darkIcon2.classList.remove("bi-moon-fill")
        darkIcon2.classList.add("bi-brightness-high-fill")
        darkStatus1.classList.add("hidden")
        darkStatus2.classList.remove("hidden")
    }
}
darkMode2.onclick = function (event) {
    event.preventDefault()
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
        darkMode2.classList.remove("whiteShadow")
        darkIcon.classList.add("bi-moon-fill")
        darkIcon.classList.remove("bi-brightness-high-fill")
        darkIcon2.classList.add("bi-moon-fill")
        darkIcon2.classList.remove("bi-brightness-high-fill")
        darkStatus1.classList.remove("hidden")
        darkStatus2.classList.add("hidden")
    } else {
        body.classList.add("dark")
        darkMode2.classList.add("whiteShadow")
        darkIcon.classList.remove("bi-moon-fill")
        darkIcon.classList.add("bi-brightness-high-fill")
        darkIcon2.classList.remove("bi-moon-fill")
        darkIcon2.classList.add("bi-brightness-high-fill")
        darkStatus1.classList.add("hidden")
        darkStatus2.classList.remove("hidden")
    }
}

// menu 
const menuBtn = document.querySelector("#menuBtn")
const menuClose = document.querySelector("#menuClose")
const menu = document.querySelector("#menu")
const menuList = document.querySelector("#menuList")
const navbar = document.querySelector("#navbar")
const menuIcons = document.querySelectorAll(".menuIcon");
const menuIcons2 = document.querySelectorAll(".menuIcon2");

menuBtn.onclick = function (event) {
    menu.classList.remove("-z-50", "opacity-0", "backdrop-blur-none")
    menu.classList.add("z-50", "backdrop-blur-xl")
    menuList.classList.remove("-translate-y-96")
    navbar.classList.add("opacity-0")
    menuIcons.forEach(icon => icon.classList.remove("scale-0")); // Scale up the icons
    menuIcons2.forEach(icon => icon.classList.remove("scale-0")); // Scale up the icons
}
menuClose.onclick = function (event) {
    menu.classList.add("-z-50", "opacity-0", "backdrop-blur-none")
    menu.classList.remove("z-50", "backdrop-blur-xl")
    menuList.classList.add("-translate-y-96")
    navbar.classList.remove("opacity-0")
    menuIcons.forEach(icon => icon.classList.add("scale-0")); // Scale up the icons
    menuIcons2.forEach(icon => icon.classList.add("scale-0")); // Scale up the icons
}