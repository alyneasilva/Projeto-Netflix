$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function clicou(){
    window.open("http://127.0.0.1:5500/Projeto%20Netflix/filmeprincipal.html","Assita Agora","top,height=500, width=600",true)
}

function mudarEstado (elemento){
    var display = document.getElementById(elemento).style.display;
    if(display=='none')
        document.getElementById(elemento).style.display = 'block';
    else
        document.getElementById(elemento).style.display = 'none';
    
}
