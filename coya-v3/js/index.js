// ** smooth scrolling ** //
// source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

const cont = document.querySelector('#container');
const navBar = document.querySelector('#nav');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const brand = document.querySelector('.brand');
const topButton = document.querySelector('.top');
const gridItems = document.querySelectorAll('.grid-item');

let currentModal;

function assignClickEvent() {
	gridItems.forEach(function(elt) {
		elt.onclick = display;
	});
}

function removeClickEvent() {
	gridItems.forEach(function(elt) {
		elt.onclick = null;
	});
}

const display = function(e) {
	currentModal = document.querySelector('#' + e.target.getAttribute('alt'));
	
	currentModal.style.display = 'block';
	cont.classList.add('blur');
	document.body.style.overflow = 'hidden';
	removeClickEvent();
	setTimeout(function() {
		cont.onclick = dismiss;
	});
};

const dismiss = function() {
  currentModal.style.display = 'none';
  cont.classList.remove('blur');
  cont.onclick = null;
	assignClickEvent();
	document.body.style.overflow = 'auto';
};

assignClickEvent();
close.onclick = dismiss;

window.onscroll = function(e) {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	
	if(scrollTop > 200) {
		navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
		topButton.classList.add('show');
		brand.classList.add('show');
	}
	else {
		navBar.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
		topButton.classList.remove('show');
		brand.classList.remove('show');
	}
};