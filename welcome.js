export default function(massage) {

	if(NODE_ENV == 'development') {
		console.log(massage);
	}

	alert(`Welcome ${massage}`);
}