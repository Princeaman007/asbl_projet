const API_URL = 'http://localhost:5000/api';  // Change si ton backend est sur un autre port

// Fonction pour effectuer les requêtes POST génériques
function postRequest(endpoint, data) {
    return fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}

// Fonction pour la connexion
function login(loginData) {
    return postRequest('/auth/login', loginData);
}

// Fonction pour l'inscription
function register(registerData) {
    return postRequest('/auth/register', registerData);
}

// Fonction pour récupérer les données de l'utilisateur (ou autre API)
function getUserData(token) {
    return fetch(`${API_URL}/user`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}

// Exporter toutes les fonctions
export { login, register, getUserData };
