var rhit = rhit || {};

rhit.clickBut = function(element){
    let b = document.body;
    b.onclick = (event) =>{
        if (event.target.classList.contains(element) || event.target.classList.contains("navbar-toggler") ||event.target.id == "navicon"){
            return;
        }
        else {
            document.querySelector("#navbarcollapse").classList.remove("show")
        }
    }
}

rhit.projectDisplay = function(){
    let projects = document.querySelectorAll(".project");
    for(const project of projects){
        project.addEventListener("mouseenter", function(event){
           project.children[0].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
           project.children[1].style.visibility = "visible";
        })
        
        project.addEventListener("mouseleave", function(event){
            project.children[1].style.visibility = "hidden";
            project.children[0].style.backgroundColor = "rgba(0, 0, 0, 0)"
         })
    }
}

rhit.sendEmail = function(){
    const emailLink = document.querySelector("#emailAddress");

    emailLink.onclick = (event) => {
        window.open('mailto:suq@rose-hulman.edu');
    }
}


rhit.main = function () {
	console.log("Ready");
    rhit.clickBut("nav-link");
    rhit.projectDisplay();
    rhit.sendEmail();
    const about = document.querySelector("#about");

};

rhit.main();