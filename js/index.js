
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

  let topBar = document.querySelector('.topbar');


let anchoPagina = window.innerWidth;

window.addEventListener('scroll', () => {
	if(anchoPagina>700) {
		if (window.scrollY > 0) {
			topBar.classList.add('transparent');
		} else {
			topBar.classList.remove('transparent');
		}
	}
});

let topbarHeight = topBar.offsetHeight;

let mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;



document.addEventListener("DOMContentLoaded", function() {
	// Nav mobile 
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


