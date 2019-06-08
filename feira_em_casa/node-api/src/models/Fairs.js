import { model, Schema } from 'mongoose';
import paginate from 'mongoose-paginate';

const FairsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

FairsSchema.plugin(paginate);
const Fairs = model('Fairs', FairsSchema);

export default Fairs;