var interface;
(function (interface) {
    interface[interface["db9"] = 0] = "db9";
    interface[interface["db25"] = 1] = "db25";
})(interface || (interface = {}));
var baudRate;
(function (baudRate) {
    baudRate[baudRate["low"] = 9600] = "low";
    baudRate[baudRate["medium"] = 57600] = "medium";
    baudRate[baudRate["hight"] = 115200] = "hight";
})(baudRate || (baudRate = {}));
var connection = {
    interface: interface[0],
    baudRate: baudRate[1]
};
console.log(connection);
