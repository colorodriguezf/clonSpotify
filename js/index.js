
$(document).ready(function(){   
	console.log("entro");
  	$('.slider').slick({
	  slidesToShow: 6,
		slidesToScroll: 4,
		autoplay: false,
		arrows: false,
		responsive: [
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			},
			{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,  
				}
			  },
		]
	  });
  
  });

  // Nav mobile 
	document.addEventListener("DOMContentLoaded", function() {
	let navItems = document.querySelectorAll(".nav-main-mobile li");

    
    navItems.forEach(function(item) {
		item.addEventListener("click", function() {
			navItems.forEach(function(navItem) {
				navItem.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
    navItems[0].classList.add("active");
	
	// Links hashtags
	let hashtagsDivs = document.querySelectorAll('.hashtags div');
	hashtagsDivs.forEach(function(div){
		div.addEventListener('click', () => {
			hashtagsDivs.forEach((div) => {
				div.classList.remove('activeHash');
			});
			div.classList.add('activeHash');
		});
	});
	hashtagsDivs[0].classList.add("activeHash");

});



// Nav al scrollear
let topBar = document.querySelector('.topbar');
let fondoNavPlaylist = document.querySelector('.fondo-nav-playlist');
let anchoPagina = window.innerWidth;
let randomColor = "";

window.addEventListener('scroll', () => {
  if (anchoPagina > 700) {
    // Obtén la posición y altura del fondo-nav-playlist
    let fondoNavPlaylistRect = fondoNavPlaylist.getBoundingClientRect();
    let fondoNavPlaylistBottom = fondoNavPlaylistRect.bottom;
	console.log(fondoNavPlaylistRect);
	console.log(fondoNavPlaylistBottom);

    // Compara la posición del scroll con la posición del fondo-nav-playlist
    if (window.scrollY > fondoNavPlaylistBottom +200) {
      topBar.style.background = randomColor;
    } else {
      topBar.style.background = 'none';
    }
  }
});

let topbarHeight = topBar.offsetHeight;
let mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;


// Cambiar el color de dondo del nav y playlist PC
let contenedoresPlaylist = document.querySelectorAll('.contenedor-playlist');
let fondo = document.querySelector('.fondo-nav-playlist');
let anchoPantalla = "";
contenedoresPlaylist.forEach(contenedor => {
	anchoPantalla = window.innerWidth;
contenedor.addEventListener('mouseenter', () => {
	if (anchoPantalla > 1000) {
	 randomColor = getRandomColor();
	fondo.style.background = `linear-gradient(to bottom, ${randomColor}, transparent)`;
	if (window.scrollY > fondoNavPlaylistBottom +200) {
	topBar.style.background = `linear-gradient(to bottom, ${randomColor}, transparent)`;
	}
 }
});

});

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
	}




