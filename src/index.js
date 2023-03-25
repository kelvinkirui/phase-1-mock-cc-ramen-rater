// write your code here
const ramenMenu = document.getElementById("ramen-menu");
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramenArray) => {
    ramenArray.forEach((ramen) => {
      appendRamenToMenu(ramen);
    });
  });

function appendRamenToMenu(ramenObj) {
  const imageDomElement = document.createElement("img");
  imageDomElement.src = ramenObj.image;
  imageDomElement.addEventListener("click", () => {
    const posterImage = document.querySelector("#ramen-detail .detail-image");
    posterImage.src = ramenObj.image;
    const posterName = document.querySelector("#ramen-detail .name");
    posterName.textContent = ramenObj.name;

    const posterRestaurant = document.querySelector(
      "#ramen-detail .restaurant"
    );
    posterRestaurant.textContent = ramenObj.restaurant;
    const ratingDisplay = document.querySelector("#rating-display");
    ratingDisplay.textContent = ramenObj.rating;
    const comment = document.querySelector("#comment-display");
    comment.textContent = ramenObj.comment;
  });
  ramenMenu.append(imageDomElement);
}
const form = document.querySelector("#new-ramen");

form.addEventListener("submit", (event) => {
  console.log("form submitted");
  event.preventDefault();
  const newRamenName = event.target.name.value;
  const newRestaurant = event.target["new-restaurant"].value;
  const newImage = event.target["new-image"].value;
  const newRating = event.target["new-rating"].value;
  const newComment = event.target["new-comment"].value;
  debugger;
  const newRamen = {
    name: newRamenName,
    restaurant: newRestaurant,
    image: newImage,
    rating: newRating,
    comment: newComment,
  };
  appendRamenToMenu(newRamen);
});