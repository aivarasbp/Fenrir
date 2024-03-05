document.addEventListener("DOMContentLoaded", function () {
  const expandableItems = document.querySelectorAll('.expandable');

  expandableItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      item.classList.add('expanded');
    });

    item.addEventListener('mouseleave', function () {
      item.classList.remove('expanded');
    });
  });
});

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
})