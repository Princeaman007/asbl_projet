const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
 const serviceRoutes = require("./routes/serviceRoutes");
 const courseRoutes = require("./routes/courseRoutes");
 const eventRoutes = require("./routes/eventRoutes");
const languageRoutes = require("./routes/languageRoutes");
const cors = require('cors');


require("dotenv").config(); // Charger les variables d'environnement

const app = express();

app.use(cors());

app.use(express.json()) ;

// Connexion à la base de données
connectDB();

// Activer CORS pour toutes les routes


app.use("/api/users", userRoutes);

// Routes pour les services (prestations)
 app.use("/api/services", serviceRoutes);

// Routes pour les cours
  app.use("/api/courses", courseRoutes);

// Routes pour les événements
 app.use("/api/events", eventRoutes);

// Routes pour les langues
app.use("/api/languages", languageRoutes);

app.post('/api/users/logout', (req, res) => {
    res.json({ message: 'Déconnecté avec succès' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
