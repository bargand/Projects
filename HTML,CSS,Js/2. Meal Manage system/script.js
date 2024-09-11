document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const stopMealButton = document.getElementById('stop-meal');
    const finishMealButton = document.getElementById('finish-meal');
    let selectedDay = null;

    const now = new Date();
    const currentDay = now.getDate(); // Current date number
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    // Generate the calendar for the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        // Mark past dates as green (meals counted)
        if (day < currentDay) {
            dayElement.classList.add('green');
        }

        // Today and future dates start as white (not yet counted for meal)
        if (day === currentDay && now.getHours() >= 18) {
            // If it's 9 PM or later, count today's meal for tomorrow
            dayElement.classList.add('green');
        }

        // Day click event to select the day
        dayElement.addEventListener('click', () => {
            if (selectedDay) {
                selectedDay.classList.remove('selected');
            }
            selectedDay = dayElement;
            selectedDay.classList.add('selected');
        });

        calendar.appendChild(dayElement);
    }

    // Stop meal function
    stopMealButton.addEventListener('click', () => {
        if (!selectedDay || selectedDay.classList.contains('finished')) {
            alert('Please select a valid day that is not already finished.');
            return;
        }
        if (isPastCutoffTime() && selectedDay.textContent == currentDay) {
            alert('Cannot stop the meal after 9 PM.');
            return;
        }
        selectedDay.classList.remove('green');
        selectedDay.classList.add('red');
        selectedDay.classList.remove('selected');
    });

    // Finish meal function
 
    finishMealButton.addEventListener('click', () => {
        if (!selectedDay || !selectedDay.classList.contains('green')) {
            alert('Please select a green marked day.');
            return;
        }
        selectedDay.classList.remove('green');
        selectedDay.classList.add('yellow'); // Change to yellow when the meal is finished
        selectedDay.classList.remove('selected');
    });

    // Function to determine if the current time is past 9 PM
    function isPastCutoffTime() {
        const cutoffTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0);
        return now >= cutoffTime;
    }
});
