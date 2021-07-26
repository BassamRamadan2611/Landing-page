
let mainColors =localStorage.getItem("color-option");

if(mainColors !== null){
    document.documentElement.style.setProperty('--main-color',mainColors );

    document.querySelectorAll(".colors-list li").forEach(element =>{

        element.classList.remove("active");

if(element.dataset.color===mainColors){

    element.classList.add("active");
}



    })
}

let backgroundOption = true;
let backgroundInterval;
let backgroundItem=localStorage.getItem("background-options");
 if (backgroundItem!==null){


    if (backgroundItem==='true'){
        backgroundOption=true;
    }else{
        backgroundOption=false;
    }


    document.querySelectorAll(".random-background span ").forEach(element =>{ 
      element.classList.remove("active");
    })

    if(backgroundItem==='true'){
        document.querySelector(".yes").classList.add("active");
    }else{
                document.querySelector(".yes").classList.add("active");
    }
 }




document.querySelector(".toggle-settings .fa-cog").onclick=function(){
    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
}



let landPage= document.querySelector(".landing-page");




const colorli  = document.querySelectorAll(".colors-list li ");
colorli.forEach(li =>{
    li.addEventListener("click",(e) =>{
   
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);


        localStorage.setItem("color-option", e.target.dataset.color);



        e.target.parentElement.querySelectorAll(".active").forEach(element =>{

            element.classList.remove("active");
        })
        e.target.classList.add("active");
    })
})

const randomBackgroundEl  = document.querySelectorAll(".random-background span ");
randomBackgroundEl.forEach(span =>{
    span.addEventListener("click",(e) =>{
   


        e.target.parentElement.querySelectorAll(".active").forEach(element =>{

            element.classList.remove("active");
        })
        e.target.classList.add("active");

        if(e.target.dataset.background==='yes'){
            backgroundOption=true;
      
            randomizeImg();
            localStorage.setItem("background-options",true)

        }
        else{
            backgroundOption=false;
           
            clearInterval(backgroundInterval);
            localStorage.setItem("background-options",false)
        }
    })
})

let imgsArray= ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];


function randomizeImg(){


    if(backgroundOption === true){

     backgroundInterval= setInterval(()=>{

     

            let randomNumber = Math.floor(Math.random() * imgsArray.length);
         
        
          landPage.style.backgroundImage ='url("images/'+ imgsArray[randomNumber] +'")';
        
        
        
        },1000)

    }
}

randomizeImg();



window.onscroll = function(){
    let ourSkills = document.querySelector(".skills");

let skillsOffsetTop = ourSkills.offsetTop;


let skillsOuterHeight= ourSkills.offsetHeight;

let windowHeight= this.innerHeight;


let windowScrollTop = this.pageYOffset;




if( windowScrollTop >= (skillsOffsetTop + skillsOuterHeight - windowHeight)){
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {
 skill.style.width = skill.dataset.progress;


    })

}


}


let ourGallary =document.querySelectorAll(".gallary img");


ourGallary.forEach(img=>{

    img.addEventListener("click",(e)=>{

        let overlay = document.createElement("div");
        overlay.className="popup-overlay";
        document.body.appendChild(overlay);


        let popupBox = document.createElement("div");

       

popupBox.className="popup-box";
if(img.alt !== null){

    let imgeHeading = document.createElement("h3");
    
    let imageText = document.createTextNode(img.alt);
    
    
    imgeHeading.appendChild(imageText);
    popupBox.appendChild(imgeHeading);
}
let popupImage = document.createElement("img");


popupImage.src = img.src;

popupBox.appendChild(popupImage);

document.body.appendChild(popupBox);


let closeButton =document.createElement("span");
let closeButtonText = document.createTextNode("x");

closeButton.appendChild(closeButtonText);

closeButton.className="close-button";

popupBox.appendChild(closeButton);



    })
})

document.addEventListener("click",function(e){

if( e.target.className=="close-button"){


    e.target.parentNode.remove();


    document.querySelector(".popup-overlay").remove();
}


})


const allLinks =document.querySelectorAll(".links a");
allLinks.forEach(link =>{
link.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({

        behavior:'smooth'
    })
})

})
document.querySelector(".reset-options").onclick = function(){


localStorage.clear();
window.location.reload();

}


let toggleBtn = document.querySelector(".toggle-menu");

let tlinks = document.querySelector(".links");


toggleBtn.onclick= function(e) {
    e.stopPropagation();

    this.classList.toggle("menu-active");
    
    tlinks.classList.toggle("open");


}


document.addEventListener("click",(e)=>{


   if(e.target !== toggleBtn && e.target!==tlinks){

    if(tlinks.classList.contains("open")){

        toggleBtn.classList.toggle("menu-active");
    
        tlinks.classList.toggle("open");


    }


   }
   

tlinks.onclick = function(e){
    e.stopPropagation();


}  })




