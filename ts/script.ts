//Splide Slider Initialization
new Splide (".splide", {
    type: "loop",
    perPage: 2,
    perMove: 2,
    autoplay: true,
    resetProgress: true,
    pauseOnHover: true,
    pagination: false,
    gap: 10,
    breakpoints: {
        768: {
          perPage: 1,
          perMove: 1,
      }
  },
}).mount();

//Scroll Events
window.onscroll = function() {scrollFunction()};
let logo:any = document.getElementById("logo");
let logoText:any = document.getElementById("logo-text");
let logoTextFront:any = document.getElementById("logo-text-front");
let logoTextBack:any = document.getElementById("logo-text-back");
let socialMedia:any = document.getElementById("socialMedia");
let contactIcon:any = document.getElementById("contact-icon");

function scrollFunction() {
  if (document.documentElement.scrollTop > 10) {
    logo.style.width = "10%";
    logo.style.height = "80%";
    logoTextFront.style.display ="none";
    logoTextBack.style.display ="none";
    logoText.style.fontSize = "1vw"
    socialMedia.style.height = "50%"
    socialMedia.style.bottom = "30%";
  } else {
    logo.style.width = "20%";
    logo.style.height = "100%";
    logoTextFront.style.display ="inline-block";
    logoTextBack.style.display ="inline-block";
    logoText.style.fontSize = "1.5vw"
    socialMedia.style.height = "80%";
    socialMedia.style.bottom = 0;
  }
//   if (document.documentElement.scrollTop > 1900) {
//       contactIcon.style.display = "none";
//   } else {
//     contactIcon.style.display = "flex";
//   }
}

// //Initialize Project array
// let arrProjects: Array<Project> = [];

// //Initialize Class Project
// class Project {
//     constructor(public img: string, public name: string, public tech: string, public description: string){
//         arrProjects.push(this);
//     }
//     displayProject() {
//         return `<li class="splide__slide">
//         <img class="slide-img" src="${this.img}">
//         <h1 class="slide-headline">${this.name}</h1>
//         <p class="slide-p-tech">${this.tech}</p>
//         <p class="slide-description">${this.description}</p>
//         <button class="slide-button">
//             <p class="button-text">Learn more</p>
//             <img class="btn-img" src="img/arrow_right.png">
//         </button>
//     </li>`
//     }
// }

// //Create Projects
// new Project ("img/pizzeria.png", "Pizza Delivery Service", "Angular-HTML-SCSS-TypeScript", "This was a funny task to do. First Angular project with a little Shopping Cart!")
// new Project ("img/pizzeria.png", "Pizza Delivery Service", "Angular-HTML-SCSS-TypeScript", "This was a funny task to do. First Angular project with a little Shopping Cart!")
// new Project ("img/pizzeria.png", "Pizza Delivery Service", "Angular-HTML-SCSS-TypeScript", "This was a funny task to do. First Angular project with a little Shopping Cart!")

// let cardArea = document.getElementById("cardArea") as HTMLElement;
// //Loop Cards in HTML Element
// function createCards() {
//     cardArea.innerHTML = ``;
//     for (let val of arrProjects) {
//         cardArea.innerHTML += val.displayProject();
//     }
// }

// createCards();

