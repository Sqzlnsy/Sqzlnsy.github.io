var rhit = rhit || {};

rhit.clickBut = function(element){
    let b = document.body;
    b.onclick = (event) =>{
        if (event.target.classList.contains(element) || event.target.classList.contains("navbar-toggler")){
            return;
        }
        else {
            document.querySelector("#navbarcollapse").classList.remove("show")
        }
    }
}

rhit.main = function () {
	console.log("Ready");
        rhit.clickBut("nav-link");
};

rhit.main();