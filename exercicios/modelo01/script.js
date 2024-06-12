function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuts = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuts}h.`

    if (hora >= 6 && hora < 12) {
        img.src = "manha.jpg"
        
        } else if (hora >=12 && hora < 18) {
            img.src = "tarde.jpg"
        } else {
            img.src = "noite.jpg"
        }
}
