interface IMovie {
	id: string
	name: string
	genre: "Crime" | "Horror" | "Western" | "Erotic"
	directorId: string
}

export const movies: IMovie[] = [
	{ id: '1', name: '3 bobi', genre: "Western", directorId: '1' },
	{ id: '2', name: 'boba 2', genre: "Crime", directorId: '2' },
	{ id: '3', name: 'silence of boba', genre: "Horror", directorId: '3' },
	{ id: '4', name: '1001 boba', genre: "Erotic", directorId: '4' },
	{ id: '5', name: '4 bobi', genre: "Western", directorId: '1' },
	{ id: '6', name: 'boba 3', genre: "Crime", directorId: '2' },
	{ id: '7', name: 'silence of boba 2', genre: "Horror", directorId: '3' },
	{ id: '8', name: '1002 boba', genre: "Erotic", directorId: '4' },
]
