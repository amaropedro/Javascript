function carregar()
{
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora <12)
    {
        //dia
        img.src = 'manhã.png'
        document.body.style.background = '#FCE689'
    }
    else if(hora <= 18)
    {
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = '#E1A9C9'
    }
    else
    {
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#074E6C'
    }
}