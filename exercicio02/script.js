function verificar(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");

    if (fano.value.length == 0 || isNaN(Number(fano.value)) || Number(fano.value) > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = anoAtual - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "kidboy.png");

            } else if ( idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemboy.png');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultboy.png');
            } else {
                //Idoso
                img.setAttribute('src', 'oldboy.png');
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'kidgirl.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemgirl.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultgirl.png');
            } else {
                //Idoso
                img.setAttribute('src', 'oldgirl.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
        img.style.display = "block";
        img.style.margin = "0 auto";

    }

}