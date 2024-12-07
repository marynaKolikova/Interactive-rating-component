const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.querySelector('.submit-btn');
const rating = document.querySelector('.rating');
const thanks = document.querySelector('.thanks');
const selectedText = document.querySelector('.selected-text');

ratingButtons.forEach(choice => {
    choice.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        choice.classList.add('selected');
  });
});

submitButton.addEventListener('click', () => {
    let selected = document.querySelector('.selected');

    if (selected) {
    rating.classList.add('hidden');
    thanks.classList.remove('hidden');
    let num = selected.textContent;
        selectedText.textContent = `You selected ${num} out of 5`

        setTimeout(() => {
            location.reload();
        }, 5000);
    }
});


  