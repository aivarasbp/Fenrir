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

// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.7 + "px";
// })
// window.onscroll = function () { myFunction() };

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
