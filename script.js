// Get the input field
const input = document.getElementById("searchInput");

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