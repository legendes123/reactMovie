export function getCookie(name) {
	let re = new RegExp(name + '=([^;]+)')
	let value = re.exec(document.cookie)
	return value
	// return value != null ? unescape(value[1]) : null
}
