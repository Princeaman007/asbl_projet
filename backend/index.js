const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
 const serviceRoutes = require("./routes/serviceRoutes");
 const courseRoutes = require("./routes/courseRoutes");
 const eventRoutes = require("./routes/eventRoutes");
const languageRoutes = require("./routes/languageRoutes");

require("dotenv").config(); // Charger les variables d'environnement

const app = express();

app.use(express.json()) ;

// Connexion à la base de données
connectDB();


app.use("/api/users", userRoutes);

// Routes pour les services (prestations)
 app.use("/api/services", serviceRoutes);

// Routes pour les cours
  app.use("/api/courses", courseRoutes);

// Routes pour les événements
 app.use("/api/events", eventRoutes);

// Routes pour les langues
app.use("/api/languages", languageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
