// Function to update the clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;
}

// Call updateClock function every second
setInterval(updateClock, 1000);



function openCalendar() {
  const calendarContainer = document.getElementById('calendarContainer');
  calendarContainer.style.display = 'block';
}

// Function to close the calendar
function closeCalendar() {
  const calendarContainer = document.getElementById('calendarContainer');
  calendarContainer.style.display = 'none';
}

// Function to generate the calendar
// Function to generate the calendar
function generateCalendar() {
  const calendar = document.getElementById('calendar');
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const currentDay = currentDate.getDate();

  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th colspan="7">' + year + '/' + (month + 1) + '</th></tr>';
  calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayCount = 1;
  for (let i = 0; i < 6; i++) {
    calendarHTML += '<tr>';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < new Date(year, month).getDay()) {
        calendarHTML += '<td></td>';
      } else if (dayCount > daysInMonth) {
        break;
      } else {
        if (dayCount === currentDay) {
          calendarHTML += '<td class="current-day">' + dayCount + '</td>';
        } else {
          calendarHTML += '<td>' + dayCount + '</td>';
        }
        dayCount++;
      }
    }
    calendarHTML += '</tr>';
  }

  calendarHTML += '</tbody></table>';
  calendar.innerHTML = calendarHTML;
}

// Call generateCalendar function when the page loads
window.onload = generateCalendar;

document.getElementById('calendar').addEventListener('click', function (event) {
  closeCalendar(); // Close the calendar when clicked anywhere inside the calendar
  event.stopPropagation(); // Prevent the click event from bubbling up
});