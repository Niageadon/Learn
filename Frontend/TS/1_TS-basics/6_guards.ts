interface Response {
	header: 'boba';
	result: 'result'
}
interface Error {
	header: 'boba';
	result: 'result'
}

function handle(res: Response | Error) {
	return res instanceof Response? 'biba': 'boba'
}

//__________________________________________________________
type alert = 'success' | 'danger' | 'warning';
function setAlertType(type: alert) {

}
setAlertType('success');
