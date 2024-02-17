// JavaScript to change caret icon direction when accordion is collapsed
document.querySelectorAll('.accordion-button').forEach(function(button) {
  button.addEventListener('click', function() {
    var caretIcon = this.querySelector('.bi-caret-left-fill');
    if (caretIcon) {
      caretIcon.classList.toggle('caret-rotate');
    }
  });
});
