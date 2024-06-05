import { initialCards } from "./cards.js";

const placesList = document.querySelector(".cards__list")

function cardCreate(cardData){
    const cardTemplate = document.querySelector(".card__template");
    const cardElement = cardTemplate.content.cloneNode(true).querySelector(".card");



    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    const cardText = cardElement.querySelector(".card__text");

    const cardCommentZone = cardElement.querySelector('.card__comment-zone');
    const cardCommentButton = cardElement.querySelector('.card__comment');

    cardCommentButton.addEventListener('click', () =>{
        openComments(cardCommentZone);
    })

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardText.textContent = cardData.text;

    return cardElement;
}



initialCards.forEach((cardData) => {
    const cardElement = cardCreate(cardData);
    placesList.prepend(cardElement);
})

//asdasda


function openComments(comment){
    comment.classList.toggle('hidden');
}




