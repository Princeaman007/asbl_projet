// Vérifier si l'utilisateur est authentifié en récupérant l'objet user du localStorage
window.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));  // Récupère les données de l'utilisateur

    if (!user) {
        // Si aucun utilisateur n'est trouvé dans le localStorage, rediriger vers la page de connexion
        window.location.href = 'login.html';
    } else {
        // Si un utilisateur est trouvé, afficher ses informations
        console.log('Utilisateur connecté :', user);
        // Optionnellement, afficher les informations de l'utilisateur sur la page
    }
});
