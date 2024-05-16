

function toggleTheme(){
  const html = document.documentElement
  const avatar = document.querySelector(".profile img")

  if(html.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar.png")
    avatar.setAttribute("alt", "Foto de perfil no tema escuro.")
  } else {
    avatar.setAttribute("src", "./assets/avatar-light.png")
    avatar.setAttribute("alt", "Foto de perfil no tema claro.")
  }

  html.classList.toggle("light")
}