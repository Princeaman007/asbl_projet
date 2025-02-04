const express = require('express');
const router = express.Router();
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');

// CRUD des événements
router.post('/', createEvent); // Ajouter un événement
router.get('/', getEvents); // Récupérer tous les événements
router.get('/:id', getEventById); // Récupérer un événement par ID
router.put('/:id', updateEvent); // Mettre à jour un événement
router.delete('/:id', deleteEvent); // Supprimer un événement

module.exports = router;
