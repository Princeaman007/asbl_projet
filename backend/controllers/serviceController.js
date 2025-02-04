const Service = require('../models/Service');

// Création d'un service
const createService = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Récupérer tous les services
const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Récupérer un service par ID
const getServiceById = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.findById(id);
        if (!service) return res.status(404).send('Service non trouvé');
        res.status(200).json(service);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Mettre à jour un service
const updateService = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const updatedService = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
        res.status(200).json(updatedService);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

// Supprimer un service
const deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        await Service.findByIdAndDelete(id);
        res.status(200).send('Service supprimé');
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
};

module.exports = { createService, getAllServices, getServiceById, updateService, deleteService };
