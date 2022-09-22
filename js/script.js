function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        //img que estamos carregando em JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/menino.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovemM.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }


        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/menina.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovemF.jpg')
            }else if (idade < 50){
                //adulta
                img.setAttribute('src', 'img/mulher.jpg')
            }else{
                //idosa
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML = `${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}