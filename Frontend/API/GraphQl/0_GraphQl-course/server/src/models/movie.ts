import {Schema, model, Types} from 'mongoose'

const movieSchema = new Schema({
	name: String,
	genre: String,
	directorId: String,
	//_id: Types.ObjectId
})

export default model('Movie', movieSchema)
