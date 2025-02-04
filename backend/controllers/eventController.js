// controllers/eventController.js
const Event = require('../models/Event');

// Fonction pour créer un événement
exports.createEvent = (req, res) => {
  const { title, date, location, services } = req.body;

  const newEvent = new Event({ title, date, location, services });
  newEvent.save()
    .then(event => {
      res.status(201).json({ message: 'Événement créé avec succès', event });
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
};

// Fonction pour récupérer tous les événements
exports.getEvents = (req, res) => {
  Event.find()
    .populate('services')  // Si tu veux peupler les services associés à l'événement
    .then(events => {
      res.status(200).json(events);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour récupérer un événement par ID
exports.getEventById = (req, res) => {
  const { id } = req.params;
  Event.findById(id)
    .populate('services')
    .then(event => {
      if (!event) {
        return res.status(404).json({ message: 'Événement non trouvé' });
      }
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour mettre à jour un événement
exports.updateEvent = (req, res) => {
  const { id } = req.params;
  const { title, date, location, services } = req.body;

  Event.findByIdAndUpdate(id, { title, date, location, services }, { new: true })
    .then(event => {
      if (!event) {
        return res.status(404).json({ message: 'Événement non trouvé' });
      }
      res.status(200).json({ message: 'Événement mis à jour avec succès', event });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour supprimer un événement
exports.deleteEvent = (req, res) => {
  const { id } = req.params;
  Event.findByIdAndDelete(id)
    .then(event => {
      if (!event) {
        return res.status(404).json({ message: 'Événement non trouvé' });
      }
      res.status(200).json({ message: 'Événement supprimé avec succès' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
