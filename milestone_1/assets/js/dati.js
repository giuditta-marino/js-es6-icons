const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

$(document).ready(function(){


	//
	// icons.forEach((item, i) => {
	// 	const template = $('.template .card').clone();
	// 	$('.container').append(template);
	// 		console.log(template);
	// });


	icons.forEach((item, i) => {
		$('.container').append(`<div class="card">
			<div class="icon-name">
				<i class= "${item.family} ${item.prefix}${item.name}"></i>
				<p>${item.name}</p>
			</div>
		</div>`);
	});

const colors = [
	'yellow', 'purple', 'blue'
];
console.log(colors);

let myColor;
icons.forEach((item, i) => {
	if (item.type == 'animal') {
		myColor = colors[2]
	} else if (item.type == 'vegetable') {
		myColor = colors[0]
	} else if (item.type == 'user') {
		myColor = colors[1]
	}

	$('.container i').css('color', 'myColor');
});














})
