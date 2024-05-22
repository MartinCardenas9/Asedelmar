document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'martin' && password === 'martin') {
        
        window.location.href = 'asesdelmar.html'; 
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});