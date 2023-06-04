
    var numeroA = window.document.getElementById('campoa')
    var numeroB = window.document.getElementById('campob')
    var res = window.document.getElementById('mensagemcorreto')
    var erro = window.document.getElementById('mensagemerro')
    
    
    
    function validar(){
        
        var na = Number(numeroA.value)
        var nb = Number(numeroB.value)
        
    if (na >= nb){
        numeroA.style.border = '2px solid red'
        numeroB.style.border = '2px solid red'
        res.style.display = 'none'
        erro.style.display = 'block'


        
    } else{
        numeroA.style.border = '2px solid green'
        numeroB.style.border = '2px solid green'
        erro.style.display = 'none'
        res.style.display = 'block'
        res.style.backgroundColor = 'green'
        res.innerHTML = `Correto, ${na} é maior que ${nb}`
    }

}