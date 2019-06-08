import { model, modelNames } from 'mongoose';
import Fairs from './../models/Fairs';

module.exports = {
    async create(req, res) {
        const fairs = await Fairs.create( req.body );
        return res.json(fairs);
    },

    async read(req, res) {
        const { page = 1 } = req.query;
        const { limit = 10 } = req.query;
        const fairs = await Fairs.paginate({}, { page, limit } );
        return res.json(fairs);
    },

    async readId(req, res) {
        const fair = await Fairs.findById(req.params.id);
        return res.json(fair);
    },

    async update(req, res) {
        const fair = await Fairs.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(fair);
    },

    async delete(req, res) {
        await Fairs.findByIdAndRemove(req.params.id);
        return res.send();
    }
};