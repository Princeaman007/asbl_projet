const express = require('express');
const router = express.Router();
const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');

// CRUD des cours
router.post('/', createCourse); // Ajouter un cours
router.get('/', getCourses); // Récupérer tous les cours
router.get('/:id', getCourseById); // Récupérer un cours par ID
router.put('/:id', updateCourse); // Mettre à jour un cours
router.delete('/:id', deleteCourse); // Supprimer un cours

module.exports = router;
