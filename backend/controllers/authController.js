const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Fonction d'enregistrement de l'utilisateur
const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Vérification si l'utilisateur existe déjà
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).send('Email déjà utilisé');

        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Création d'un nouvel utilisateur
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
        });

        await newUser.save();
        res.status(201).send('Utilisateur enregistré');
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Fonction de login de l'utilisateur
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).send('Utilisateur non trouvé');
        
//         // Vérification du mot de passe
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).send('Mot de passe incorrect');
        
//         // Création du token JWT
//         // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//         // console.log(token);
//         res.json({ user });
//     } catch (err) {
//         res.status(500).send('Erreur serveur');
//     }
// };



// Fonction de login de l'utilisateur
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Utilisateur non trouvé');
        
        // Vérification du mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Mot de passe incorrect');
        
        // Si la connexion réussie, renvoyer les informations de l'utilisateur (sans token)
        res.json({ user });
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

module.exports = { registerUser, loginUser };

