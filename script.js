document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const location = document.getElementById('location').value;
    const birthdate = document.getElementById('birthdate').value;
    const region = document.getElementById('region').value;

    fetch('/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, class: studentClass, location, birthdate, region })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save data');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('formMessage').innerText = 'Student record saved successfully!';
        document.getElementById('formMessage').classList.remove('hidden');
        document.getElementById('studentForm').reset(); // Reset form fields
    })
    .catch(error => {
        document.getElementById('formMessage').innerText = 'Error saving record!';
        document.getElementById('formMessage').classList.remove('hidden');
        console.error('Error:', error);
    });
});





// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication logic (replace with your own logic)
    if (username === 'benjamin' && password === 'home4sure') { // Change these values as needed
        window.location.href = 'index.html'; // Redirect to your app
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }

// Clear the fields regardless of the login result
document.getElementById('username').value = '';
document.getElementById('password').value = '';

});

// Student form submission functionality














/*
document.getElementById('studentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const location = document.getElementById('location').value;
    const birthdate = document.getElementById('birthdate').value;
    const region = document.getElementById('region').value;

    fetch('/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, class: studentClass, location, birthdate, region })
    })
    .then(response => {
        console.log('Response status:', response.status); // Log response status
        if (!response.ok) {
            throw new Error('Failed to save data');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('formMessage').innerText = 'Student record saved successfully!';
        document.getElementById('formMessage').classList.remove('hidden');
        document.getElementById('studentForm').reset(); // Reset form fields
    })
    .catch(error => {
        document.getElementById('formMessage').innerText = 'Error saving record!';
        document.getElementById('formMessage').classList.remove('hidden');
        console.error('Error:', error);
    });
});
*/