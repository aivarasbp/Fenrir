const sidebar = document.querySelector('.sidebar');
const sidebarOpenBtn = document.querySelector('.sidebarOpen');
const closeBtn = document.querySelector('.closeBtn');
const sidebarCloseBtn = document.querySelector('.arrowSvg');

// Function to open the sidebar
function openSidebar() {
  sidebar.style.width = '120px';
  sidebarCloseBtn.style.opacity = '1%'; // Rotate the arrow icon
  // Adjust width as needed
}

// Function to close the sidebar
function closeSidebar() {
  sidebar.style.width = '0';
  sidebarCloseBtn.style.opacity = ''; // Rotate the arrow icon
}

// Event listener for opening the sidebar
sidebarOpenBtn.addEventListener('click', openSidebar);

// Event listener for closing the sidebar
closeBtn.addEventListener('click', closeSidebar);
