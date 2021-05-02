import Movie from './models/movie'
import Director from './models/director'

export const initDb = () => {
	const fluffy = new Movie({ name: 'fluffy' });
	//fluffy.save()
}
