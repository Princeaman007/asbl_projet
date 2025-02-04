// controllers/courseController.js
const Course = require('../models/Course');

// Fonction pour créer un cours
exports.createCourse = (req, res) => {
    console.log(req);
  const { title, description, duration, language } = req.body;

  const newCourse = new Course({ title, description, duration, language });
  newCourse.save()
    .then(course => {
      res.status(201).json({ message: 'Cours créé avec succès', course });
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
};

// Fonction pour récupérer tous les cours
exports.getCourses = (req, res) => {
  Course.find()
    .then(courses => {
      res.status(200).json(courses);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour récupérer un cours par ID
exports.getCourseById = (req, res) => {
  const { id } = req.params;
  Course.findById(id)
    .then(course => {
      if (!course) {
        return res.status(404).json({ message: 'Cours non trouvé' });
      }
      res.status(200).json(course);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour mettre à jour un cours
exports.updateCourse = (req, res) => {
  const { id } = req.params;
  const { title, description, duration, language } = req.body;

  Course.findByIdAndUpdate(id, { title, description, duration, language }, { new: true })
    .then(course => {
      if (!course) {
        return res.status(404).json({ message: 'Cours non trouvé' });
      }
      res.status(200).json({ message: 'Cours mis à jour avec succès', course });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Fonction pour supprimer un cours
exports.deleteCourse = (req, res) => {
  const { id } = req.params;
  Course.findByIdAndDelete(id)
    .then(course => {
      if (!course) {
        return res.status(404).json({ message: 'Cours non trouvé' });
      }
      res.status(200).json({ message: 'Cours supprimé avec succès' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
