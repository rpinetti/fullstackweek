const mongooose = require('mongoose');
const paginate = require('mongoose-paginate');

const FairsSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

FairsSchema.plugin(paginate);
mongooose.model('Fairs', FairsSchema);