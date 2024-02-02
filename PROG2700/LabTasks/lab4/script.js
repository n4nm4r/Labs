let score = 0;
let unlockedObjects = [];

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object, message) {
    if (!unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        document.getElementById(object).classList.add('unlocked');
        alert(`Congratulations! You've unlocked the ${object}! ${message}`);
    }
}

function checkUnlockables() {
    if (score >= 3) {
        unlockObject('planet', 'You can now explore the planetary realms!');
    }
    if (score >= 7) {
        unlockObject('rocket', 'Prepare for liftoff! Rocket unlocked!');
    }
    if (score >= 10) {
        unlockObject('alien', 'Greetings from the alien world! Alien unlocked!');
    }
}

function checkFourthObject() {
    if (unlockedObjects.length === 3) {
        const fourthObject = document.getElementById('fourthObject');
        fourthObject.style.display = 'block';
        fourthObject.classList.add('starry');
    }
}

function animateObject(element) {
    element.classList.add('clicked');
    setTimeout(() => {
        element.classList.remove('clicked');
    }, 300);
}

function animateCookie() {
    const cookie = document.getElementById('cookie');
    cookie.classList.add('clicked');
    setTimeout(() => {
        cookie.classList.remove('clicked');
    }, 300);
}

/* Existing functions remain unchanged */

function checkFourthObject() {
    if (unlockedObjects.length === 3) {
        const fourthObject = document.getElementById('fourthObject');
        fourthObject.classList.add('starry', 'unlocked');
    }
}

/* Add the following line to your existing script.js file to invoke checkFourthObject() when objects are clicked */

document.getElementById('planet').addEventListener('click', function() {
    checkFourthObject();
});

document.getElementById('rocket').addEventListener('click', function() {
    checkFourthObject();
});

document.getElementById('alien').addEventListener('click', function() {
    checkFourthObject();
});
