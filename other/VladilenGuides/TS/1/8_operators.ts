interface Car {
	__id: number,
	__owner: string,
	vendor: string,
	model: string,
	version: number
}

type carKeys = keyof Car
const vendor: carKeys = "vendor"
//___________________________________________
type noMetaKeys = Exclude<keyof Car, '__id' | '__owner'> // Исключаем
type noMetaKeys1 = Pick<Car, 'vendor' | 'model' | 'version'> // Добавляем
const mode1l: noMetaKeys = 'model'


