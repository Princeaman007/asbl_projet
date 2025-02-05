// document.getElementById('registerForm').addEventListener('submit', function (e) {
//     e.preventDefault();
  
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     const registerData = { name, email, password };
  
//     axios.post('http://localhost:5000/api/users/register', registerData)
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           // Redirection vers login après inscription
//           window.location.href = 'login.html';
//         } else {
//           alert('Erreur d\'inscription : ' + data.message);
//         }
//       })
//       .catch(error => console.error('Error:', error));
//   });
  

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:5000/api/users/register', { name, email, password })
        .then(response => {
            //alert('Inscription réussie !');
            window.location.href = 'login.html';
        })
        .catch(error => {
            console.error('Erreur lors de l’inscription:', error);
            alert('Erreur: ' + error.response.data.message);
        });
});
