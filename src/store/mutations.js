export default {
	changeCity (status, city) {
		status.city = city
		try {
			localStorage.city = city
		} catch(e) {}
	}
}
