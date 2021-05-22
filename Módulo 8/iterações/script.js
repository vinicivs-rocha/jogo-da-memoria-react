var gender
for (let i = 01; i <= 5; i++) {
	console.log(i)
}

while (gender != 'gay') {
	var res = prompt('tu é?')
	if (res == 's') {
		console.log('gay')
		gender = 'gay'
	} else {
		gender = undefined
	}
}
