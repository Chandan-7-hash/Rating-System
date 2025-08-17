const stars = document.querySelectorAll('.rating i');
const result = document.getElementById('result');
let selectedRating = 0;

const messages = {
  1: "Poor 😞",
  2: "Good 🙂",
  3: "Nice 😃",
  4: "Awesome 🤩",
  5: "Godspeed 🚀"
};

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const val = star.getAttribute('data-value');
    highlightStars(val);
  });

  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    highlightStars(selectedRating);
    result.textContent = messages[selectedRating];
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    const val = star.getAttribute('data-value');
    if (val <= rating) {
      star.classList.add('text-warning');
      star.classList.remove('text-secondary');
    } else {
      star.classList.add('text-secondary');
      star.classList.remove('text-warning');
    }
  });
}
