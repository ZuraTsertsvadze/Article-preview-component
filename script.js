const shareCont = document.querySelector(".share-cont");
const profCont = document.querySelector(".profile-cont");
const socialCont = document.querySelector(".social-cont");
const imgCont = document.querySelector(".img-cont");
const displayCont = document.querySelector(".display-cont");


shareCont.addEventListener("click", () => {

    // profCont.style.backgroundColor="#48556a";
    // profCont.style.margin="0px";
    // profCont.style.padding="0px 30px";


    if (!socialCont.classList.contains("active")) {

        socialCont.style.zIndex = "1";
        shareCont.style.zIndex = "1";
        
socialCont.classList.add("active")


    } else if (socialCont.classList.contains("active")) {

        socialCont.style.zIndex = "-1";
        shareCont.style.zIndex = "0";


        socialCont.classList.remove("active")

        

    }


})