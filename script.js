// Get the input field
const input = document.getElementById("searchInput");

const tags = {
    HTML5: "HTML5",
    CSS3: "CSS3",
    JS: "JS",
    JQUERY: "JQUERY",
    BOOTSTRAP: "BOOTSTRAP",
    ALPINE: "ALPINE",
    PHP: "PHP",
    MYSQL: "MYSQL",
    NODEJS: "NODEJS",
    EXPRESS: "EXPRESS",
    MONGODB: "MONGODB",
    REACT: "REACT"
}

const projectList = [
    {
        id: 1,
        title: "Theme color picker with CSS :has()",
        tags: [tags.HTML5, tags.CSS3, tags.JS],
        image: "theme-color-picker/screenshot.png",
        link: "theme-color-picker/index.html"
    },
    {
        id: 2,
        title: "Card Hover animation Effect",
        description: "Css card with hover animation effect, fallback for mobile screens and browsers with touch as primary input, referred project by Kevin Powell",
        tags: [tags.HTML5, tags.CSS3],
        image: "assets/cards.png",
        link: "cards/cards-with-hover-animation-mobile-fallback-kevin-powell/index.html"
    },
    {
        id: 3,
        title: "Animated Sidebar Navigation",
        tags: [tags.HTML5, tags.CSS3, tags.JS],
        image: "assets/animated-sidebar-menu-crop.png",
        link: "sidebars/animated-side-bar-menu/index.html"
    },
    {
        id: 4,
        title: "Animated Sliding Login and Sign up",
        tags: [tags.HTML5, tags.CSS3, tags.JS],
        image: "assets/animated-sliding-login-n-register-form.png",
        gif: "assets/animated-sliding-login-n-register-form.gif",
        link: "login-register-forms/Animated-Login-and-Sign-up/index.html"
    },
    {
        id: 5,
        title: "Bouncy Ball CSS",
        description: "https://cssdeck.com/labs/f9hdt2zx",
        tags: [tags.HTML5, tags.CSS3, tags.JS, tags.JQUERY, tags.BOOTSTRAP, tags.ALPINE],
        image: "animations/bouncy-ball-css/capture.png",
        link: "animations/bouncy-ball-css/index.html"
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        tags: [tags.HTML5, tags.JS],
        image: "assets/screenshot-2.jpg",
        link: "https://www.google.com"
    },
    {
        id: 7,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        tags: [tags.HTML5, tags.CSS3, tags.JS, tags.JQUERY, tags.NODEJS, tags.EXPRESS],
        image: "assets/screenshot-1.png",
        link: "https://www.google.com"
    },
    {
        id: 8,
        title: "Lorem ipsum dolor sit amet ",
        tags: [tags.HTML5, tags.CSS3, tags.JS, tags.EXPRESS, tags.MONGODB],
        image: "assets/screenshot-5.png",
        link: "https://www.google.com"
    },
    {
        id: 9,
        title: "Lorem ipsum dolor ",
        tags: [tags.HTML5, tags.CSS3, tags.BOOTSTRAP, tags.ALPINE, tags.PHP, tags.MYSQL, tags.REACT],
        image: "assets/screenshot-4.png",
        link: "https://www.google.com"
    }

]

const tagsContainer = document.getElementsByClassName("tags_container")[0];



tagsContainer.innerHTML = Object.values(tags).map(tag => (
    `
    <span class="tag">${tag}</span>
    `
)).join("\n")


const content = document.getElementsByClassName("content")[0];

content.innerHTML = projectList.map(project => {
    return `
         <div class="card" onclick="location.href='${project.link}';">
                <div class="card__content">
                    <h3  title="${project.title}" class="card__title">${project.title.length > 23 ? project.title.slice(0, 22) + "..." : project.title}</h3>
                    <div class="tags">
                    ${project.tags.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join("\n")}
                    </div>
                </div>
                <picture class="card__img">
                    <img class="${project.gif ? "screenshot" : ""}" src="${project.image}" alt="picture-${project.title}">
                    ${project.gif ? `<img class="gif" src="${project.gif}" alt="gif-${project.title}">` : ""}
                </picture>
            </div>
        `;
}).join("\n")


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click

        console.log("Enter pressed");

        // document.getElementById("myBtn").click();
    }
});

// const isHover = e => !!(e.querySelector(":hover") || e.parentElement.querySelector(":hover") === e);

// const myDiv = document.getElementById('card_1');
// const cards = document.querySelectorAll('.card');
// const cards = document.getElementsByClassName('card');
// cast to array
// const cards = Array.from(document.getElementsByClassName('card'));
// // select all cards with class card
// console.log(cards);

// document.addEventListener('mousemove', function checkHover() {
//     cards.forEach(card => {
//         const hovered = isHover(card);
//         if (hovered !== checkHover.hovered) {
//             // console.log(hovered ? 'hovered' : 'not hovered');
//             if (hovered) {
//                 card.classList.add("hovered");
//                 console.log("hovered");
//             } else {
//                 card.classList.remove("hovered");
//                 console.log("not hovered");
//             }
//             checkHover.hovered = hovered;
//         }
//     });
// const hovered = isHover(myDiv);
// if (hovered !== checkHover.hovered) {
//     // console.log(hovered ? 'hovered' : 'not hovered');
//     if (hovered) {
//         myDiv.classList.add("hovered");
//         console.log("hovered");
//     } else {
//         myDiv.classList.remove("hovered");
//         console.log("not hovered");
//     }
//     checkHover.hovered = hovered;
// }
// });

const cards = $('.card');

cards.hover(function (elt) {
    if (cards.index(document.activeElement) === -1) {
        $(this).toggleClass('hovered');
    }
})