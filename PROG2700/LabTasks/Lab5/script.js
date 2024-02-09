
document.addEventListener("DOMContentLoaded", function() {
  // Script for calculating birthday countdown
  function calculateBirthdayCountdown(birthdate) {
    const now = new Date();
    let nextBirthday = new Date(now.getFullYear(), birthdate.getMonth(), birthdate.getDate());

    // If the birthday has passed this year, calculate for next year
    if (now > nextBirthday) {
      nextBirthday = new Date(now.getFullYear() + 1, birthdate.getMonth(), birthdate.getDate());
    }

    const timeUntilBirthday = nextBirthday - now;

    const weeks = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);

    const countdownMessage = `There are ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds until your next birthday!`;
    document.getElementById("birthdayCountdown").textContent = countdownMessage;
  }

  // Prompt for birthdate
  const birthdateInput = prompt("Please enter your birthdate (YYYY-MM-DD):");
  const birthdate = new Date(birthdateInput);
  calculateBirthdayCountdown(birthdate);
});
