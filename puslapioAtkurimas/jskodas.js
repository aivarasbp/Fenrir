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