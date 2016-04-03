describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
	}));

	it('should filter based on favorite food', function(){
		var people = [
			{favoriteFood: 'ice cream'},
			{favoriteFood: 'jelly beans'},
			{favoriteFood: 'ice cream'}
		];

		var people_filtered = [
			{favoriteFood: 'ice cream'},
			{favoriteFood: 'ice cream'}
		];

		expect(favoriteFood(people, 'ice cream')).toEqual(people_filtered);
	});

});
