let display = document.querySelector(".display"),
	btns = Array.from(document.querySelectorAll(".btn"));

btns.map(btn => {
	btn.addEventListener("click", (e) => {

		switch(e.target.textContent) {
			case 'C': display.textContent = '';
				break;

			case '←': 
				if(display.textContent) {
						display.textContent = display.textContent.slice(0,-1)
				}
				break;

			case '=':
				try{
					display.textContent = eval(display.textContent)
				} catch {
					display.textContent = 'Error!'
				}
				break;

			default: display.textContent += e.target.textContent
		}
	});
});