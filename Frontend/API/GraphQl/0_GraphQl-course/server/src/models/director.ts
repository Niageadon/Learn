import {Schema, model, Types} from 'mongoose'

const directorSchema = new Schema({
	name: String,
	age: Number,
	//_id: Types.ObjectId
})

export default model('Director', directorSchema)
