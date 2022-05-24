export const reverse = (s) => {
	if(s) {
		const date = s.split('-');
		return `${date[2]}-${date[1]}-${date[0]}`
	}
	return '';
}
