function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    //var hora = 22;
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = "fotomanha.png";
        document.body.style.background = "#88baeb";
        document.querySelector("header h1").style.textShadow = "2px 2px 8px #88baeb";

    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = "fototarde.png";
        document.body.style.background = "#859b98";
        document.querySelector("header h1").style.textShadow = "2px 2px 8px #859b98";

    } else {
        // Boa noite
        img.src = "fotonoite.png";
        document.body.style.background = "#2c3436";    
    }
}
