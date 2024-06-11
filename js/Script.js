/*document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill out all fields');
    } else {
        alert('Form submitted successfully');
        // this functions is supposed to ensure that all fields in the contact form is filled out:  currently not working :(  
    }
});*/

document.getElementById('search').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.querySelector('#search input').value;
    alert('You searched for: ' + query);
    //this function will collect the info of what the user has searched for and tell them what they have searched 
});

