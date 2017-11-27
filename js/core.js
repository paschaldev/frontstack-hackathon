var buttonToggler = document.querySelector('.nav-btn');

buttonToggler.addEventListener('click', function(e){

	var $navbarDropdown = document.getElementById('nav-content');

	var navbarIsOpen = $navbarDropdown.classList.contains('open');

	if( navbarIsOpen ){

		//Close It
		$navbarDropdown.classList.remove('open');
	}
	else{

		//Open it
		$navbarDropdown.classList.add('open');
	}
})