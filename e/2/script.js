function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano)
    {
        alert('Erro! Digite o ano corretamente.')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked)
        {
            sex = 'Homem'
            if(idade >=0 && idade < 7)
            {
                img.setAttribute('src', 'm-bebe.png')
            }
            else if(idade < 20)
            {
                img.setAttribute('src', 'm-teen.png')
            }
            else if(idade < 50)
            {
                img.setAttribute('src', 'm-adulto.png')
            }
            else
            {
                img.setAttribute('src', 'm-idoso.png')
            }
        }
        else
        {
            sex = 'Mulher'
            if(idade >=0 && idade < 7)
            {
                img.setAttribute('src', 'f-bebe.png')
            }
            else if(idade < 20)
            {
                img.setAttribute('src', 'f-teen.png')
            }
            else if(idade < 50)
            {
                img.setAttribute('src', 'f-adulto.png')
            }
            else
            {
                img.setAttribute('src', 'f-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `sexo: ${sex} idade: ${idade}<br/><br/>`
        res.appendChild(img)
    }
}