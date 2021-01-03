window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
}

jQuery(document).ready(function($){
    var ul = document.getElementById("ul")

    //Verifica se o usuário rola a tela do celular e conserta o display do menu.
    window.addEventListener("orientationchange", function(){
        if($(window).width() <= 750 && ul.style.display == 'none'){
            ul.style.display = "Flex";
        }else if($(window).width() >= 750 && ul.style.display == 'flex'){
            ul.style.display = 'none'
        }
    })

    //esconde o menu quando os links são clicados
    let links = document.querySelectorAll("nav ul li a");
    links.forEach(item => {
        item.addEventListener('click', function(){
            if($(window).width() <= 750){
                ul.style.display = 'None';
            }
        })
    })
});