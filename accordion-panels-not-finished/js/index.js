const acc = document.getElementsByClassName("accordion-button");
for(let i = 0; i < acc.length; i++) {
	acc[i].onclick = function() {
		let activeElt;
		for(let j = 0; j < acc.length; j++) {
			if(acc[j].classList[1] === 'active') {
				acc[j].classList.toggle("active");
				acc[j].nextElementSibling.classList.toggle("show");
				activeElt = acc[j];
				break;
			}
		}

		if(activeElt !== this) {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");

			setTimeout(function() {
				this.scrollIntoView(true);
			}.bind(this), 600);
		}
	}
}