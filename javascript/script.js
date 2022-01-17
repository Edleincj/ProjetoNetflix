$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            item:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//abrir link para trailer de filmes
const url = 'https://www.youtube.com/watch?v=gaNXC9VAtSc'
const btn = document.querySelector('#btn');

function openInNewTab(url){
    const win = window.open(url, '_blank');
    win.focus();
}
btn.addEventListener('click', () => {
    openInNewTab(url);
})
