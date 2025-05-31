function toggleMode( ) {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag igm
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')) {

 //se tiver light mode, adicionar a imagem light
img.setAttribute("src","assets/assets/keury-light.png")
img.setAttribute("alt", "foto de keury com fundo claro")
  } else {
  //se tiver sem light mode, manter a imagem normal
img.setAttribute("src", "assets/assets/keury.jfif")
img.setAttribute("alt", "foto de keury com fundo escuro")

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  // html.classList.add('light')
  // }

  }
}