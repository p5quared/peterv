const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString('en-US').replaceAll('/', '-');
};

export default formatDate;
