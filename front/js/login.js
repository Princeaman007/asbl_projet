document.addEventListener('DOMContentLoaded', function () {
    // Vérifier si le formulaire existe
    const loginForm = document.getElementById('loginForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche la soumission normale du formulaire
  
        // Récupération des données du formulaire
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Vérifier que les champs ne sont pas vides
        if (!email || !password) {
          alert('Veuillez remplir tous les champs.');
          return;
        }
  
        const loginData = { email, password };
        console.log("loginData :", loginData);
  
        // Utilisation de axios pour faire une requête POST vers le backend
        axios.post('http://localhost:5000/api/users/login', loginData)
          .then(response => {
            const data = response.data; // La réponse de l'API

            console.log("data; ")
  
            if (data) {
              // Sauvegarder le token JWT dans le localStorage
              //localStorage.setItem('token', data.token);
              // Rediriger vers la page dashboard
              window.location.href = 'dashboard.html';
            } else {
              alert('Erreur de connexion : ' + (data.message || 'Aucun token reçu.'));
            }
          })
          .catch(error => {
            console.error('Erreur lors de la connexion:', error);
            if (error.response) {
              // Erreur provenant du serveur (ex: 401 Unauthorized)
              alert('Erreur : ' + (error.response.data.message || 'Identifiants incorrects.'));
            } else {
              // Erreur réseau ou autre
              alert('Une erreur est survenue. Veuillez réessayer.');
            }
          });
      });
    } else {
      console.error('Le formulaire de connexion est introuvable.');
    }
  });