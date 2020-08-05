enum interface {
	db9,
	db25
}
enum baudRate {
	low = 9600,
	medium = 57600,
	hight = 115200,
}

const connection = {
	interface: interface[0],
	baudRate: baudRate.medium
}
console.log(connection)
