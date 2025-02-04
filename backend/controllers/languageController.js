// controllers/languageController.js
const Language = require('../models/Language');

// Fonction pour créer une langue
exports.createLanguage = (req, res) => {
  const { name } = req.body;

  const newLanguage = new Language({ name });
  newLanguage.save()
    .then(language => {
      res.status(201).json({ message: 'Langue créée avec succès', language });
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
};

// Fonction pour récupérer toutes les langues
exports.getLanguages = (req, res) => {
  Language.find()
    .then(languages => {
      res.status(200).json(languages);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour récupérer une langue par ID
exports.getLanguageById = (req, res) => {
  const { id } = req.params;
  Language.findById(id)
    .then(language => {
      if (!language) {
        return res.status(404).json({ message: 'Langue non trouvée' });
      }
      res.status(200).json(language);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour mettre à jour une langue
exports.updateLanguage = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  Language.findByIdAndUpdate(id, { name }, { new: true })
    .then(language => {
      if (!language) {
        return res.status(404).json({ message: 'Langue non trouvée' });
      }
      res.status(200).json({ message: 'Langue mise à jour avec succès', language });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour supprimer une langue
exports.deleteLanguage = (req, res) => {
  const { id } = req.params;
  Language.findByIdAndDelete(id)
    .then(language => {
      if (!language) {
        return res.status(404).json({ message: 'Langue non trouvée' });
      }
      res.status(200).json({ message: 'Langue supprimée avec succès' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
