// Display shared reactions from local storage
var sharedReaction = localStorage.getItem('sharedReaction');
var sharedReactionsContainer = document.getElementById('sharedReactions');
if (sharedReaction) {
    sharedReactionsContainer.innerHTML = `<p>${sharedReaction}</p>`;
} else {
    sharedReactionsContainer.innerHTML = "<p>No shared reactions yet.</p>";
}

// Add click event listener to stars
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");
Array.from(stars).forEach(star => {
    star.addEventListener("click", function() {
        output.innerHTML = `You rated: ${star.textContent}`;
    });
});

// Logout function
function logout() {
    localStorage.removeItem('loggedInEmail');
    window.location.href = '../login/index.html';
}

// Back function
function back() {
    window.location.href = '../home/index.html';
}

// Form submission event listener
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reactionForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        submitReaction();
    });
});

// Submit reaction function
function submitReaction() {
    const rating = document.getElementById('ratingInput').value;
    const comment = document.getElementById('commentInput').value;
    const email = localStorage.getItem("loggedInEmail");

    // Validate rating and comment
    if (rating < 1 || rating > 5 || comment.trim() === "") {
        alert("Please enter a valid rating (1-5) and a comment.");
        return;
    }

    // Create a new reaction object
    const newReaction = {
        email: email,
        comment: comment,
        rating: rating
    };

    // Retrieve existing reactions from localStorage
    let reactions = JSON.parse(localStorage.getItem('reactions')) || [];

    // Add the new reaction to the reactions array
    reactions.push(newReaction);

    // Save the updated reactions array back to localStorage
    localStorage.setItem('reactions', JSON.stringify(reactions));

    // After successful submission, update the UI with the new reaction
    displayReactions([newReaction]);

    // Clear input fields
    document.getElementById('ratingInput').value = '';
    document.getElementById('commentInput').value = '';
}

// Display reactions fetched from localStorage
function displayStoredReactions() {
    // Retrieve reactions from localStorage
    let storedReactions = JSON.parse(localStorage.getItem('reactions')) || [];

    displayReactions(storedReactions);
}
displayStoredReactions();


// Fetch reactions from the API on page load
function fetchAndDisplayReactions() {
    fetch("https://weather-backend-kappa.vercel.app/reactions", {
        method: "GET",
        headers: {
            'api-key': '321dd35cfdb912208ad17ff541fa5335170e957ef19362431897d25599b703d0'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch reactions');
        }
        return response.json();
    })
    .then(data => {
        if (data && Array.isArray(data.data)) {
         
            let allReactions = data.data.concat(getStoredReactions());
            displayReactions(allReactions);
        } else {
            throw new Error('Invalid data format');
        }
    })
    .catch(error => {
        console.error('There was a problem with fetching reactions:', error);
        alert('Failed to fetch reactions. Please try again later.');
    });
}

// Function to retrieve reactions stored in localStorage
function getStoredReactions() {
    return JSON.parse(localStorage.getItem('reactions')) || [];
}


fetchAndDisplayReactions();


// Display reactions fetched from the API
function displayReactions(reactions) {
    const reactionsContainer = document.getElementById('reactionsContainer');

    reactionsContainer.innerHTML = '';

    
    reactions.slice(0, 3).forEach(reaction => {
        const { email, rating, comment } = reaction;

        const reactionBox = document.createElement('div');
        reactionBox.classList.add('reaction-box'); 

        reactionBox.innerHTML = `
            <p>Email: ${email}</p>
            <p>Comment: ${comment}</p>
            <p>Rating: ${rating}/5</p>
        `;

        const reactionContainer = document.createElement('div');
        reactionContainer.classList.add('reaction-container');
        reactionContainer.appendChild(reactionBox);

        reactionsContainer.appendChild(reactionContainer); 
    });
    
}


