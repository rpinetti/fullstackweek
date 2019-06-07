const mongoose = require('mongoose');

const Fairs = mongoose.model('Fairs');

module.exports = {
    async create(req, res) {
        console.log(req.body);
        const fair = await Fairs.create(req.body);
    },

    async read(req, res) {
        console.log('Buscando as Feiras no MongoDB...');
        const { page = 1 } = req.query;
        const { limit = 10 } = req.query;
        const fairs = await Fairs.paginate({}, { page, limit });
        return res.json(fairs);
    }
};