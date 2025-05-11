// Highlight education item with blue border on click, only one at a time
document.addEventListener('DOMContentLoaded', function() {
  const educationItems = document.querySelectorAll('.education-item');
  educationItems.forEach(item => {
    item.addEventListener('click', function() {
      educationItems.forEach(i => i.classList.remove('active-education'));
      this.classList.add('active-education');
    });
  });
});
