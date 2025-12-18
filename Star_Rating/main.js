const stars=document.querySelectorAll('.fa-star-o')
const selectedRatingValue=document.querySelector('.selected-rating-value')

let currentTotalSelectedStars = -1;

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleOnClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(e){
    const currentRating=e.target.dataset.rating;
    if(!currentRating) return;
    else handleUpdatedrating(currentRating);
}

function handleUpdatedrating(getCurrentRatingValue){
    for(let i=0;i<5;i++){
        if(i<getCurrentRatingValue){
            stars[i].classList.replace("fa-star-o","fa-star");
        }
        else{
            stars[i].classList.replace("fa-star","fa-star-o");
        }
    }
}

function handleOnClick(event){
    const currentRatingValue = event.target.dataset.rating;
    currentTotalSelectedStars = currentRatingValue;
    handleUpdatedrating(currentTotalSelectedStars)
    selectedRatingValue.textContent = currentTotalSelectedStars
}

function handleMouseLeave(){
  handleUpdatedrating(currentTotalSelectedStars)
}