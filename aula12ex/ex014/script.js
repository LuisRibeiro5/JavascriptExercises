function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora > 4 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background= '#bdd7f0'
} else if (hora > 18 || hora < 5) {
    img.src = 'noite.png'
    document.body.style.background = '#1a2a31' 
} else {
    img.src = 'tarde.png'
    document.body.style.background = '#7f6b56'
} 

}