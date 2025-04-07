import mongoose, {Schema, Document} from "mongoose";


export interface IProduct extends Document {
    title: string;
    description: string;
    bodyType: string;
    occasion: string;
    color: string;
    season: string;
    link: string;
    image: string;
}
 const productSchema = new Schema<IProduct>({
    title:{type: String, required: true},
    description:{type: String, required: true},
    bodyType:{type: String, required: true},
    occasion:{type: String, required: true},
    color:{type: String, required: true},
    season:{type: String, required: true},
    link:{type: String, required: true},
    image:{type: String, required: true},

 })

 const product = mongoose.model<IProduct>('outfitOne', productSchema);
 export default product;