// Écouter l'événement de clic sur le bouton de déconnexion
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Supprimer les données de l'utilisateur du localStorage
    localStorage.removeItem('user');

    // Rediriger l'utilisateur vers la page de connexion
    window.location.href = 'login.html';
});
