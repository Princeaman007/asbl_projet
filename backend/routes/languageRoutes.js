const express = require('express');
const router = express.Router();
const { createLanguage, getLanguages, getLanguageById, updateLanguage, deleteLanguage } = require('../controllers/languageController');

// CRUD des langues
router.post('/', createLanguage); // Ajouter une langue
router.get('/', getLanguages); // Récupérer toutes les langues
router.get('/:id', getLanguageById); // Récupérer une langue par ID
router.put('/:id', updateLanguage); // Mettre à jour une langue
router.delete('/:id', deleteLanguage); // Supprimer une langue

module.exports = router;
