function contar() {
    var ini = document.getElementById('ini');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Digite todos os dados necessários')
    }else {
        window.alert('Tudo certo, vamos para o calculo!')
        
        res.innerHTML = 'Contando'
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} ,`
        }
    }
}