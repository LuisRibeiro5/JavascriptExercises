function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = Number(document.getElementById('txtano').value);
    var res = document.getElementById('res');
    var img = document.getElementById('imagem');

    if (nasc <= 0 || nasc > ano) {
        window.alert('[ERROR] Revise os dados inseridos!');
    } else {
        var sexo = document.getElementsByName('sexo');
        var idade = ano - nasc;
        var genero = '';
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'homem';
            if (idade < 5) {
                img.setAttribute = ('src', 'bebo1.png') ;
            } else if (idade < 12) {
                img.src = 'crianco.png';
            } else if (idade < 18) {
                img.src = 'adolescento.png';
            } else if (idade < 65) {
                img.src = 'homem1.png';
            } else {
                img.src = 'velho.png';
            }
        } else {
            genero = 'mulher';
            if (idade < 5) {
                img.src = 'beba1.png';
            } else if (idade < 12) {
                img.src = 'crianca.png';
            } else if (idade < 18) {
                img.src = 'adolescenta.png';
            } else if (idade < 65) {
                img.src = 'mulher1.png';
            } else {
                img.src = 'velha.png';
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.style.textAlign = 'center';
    }
}
