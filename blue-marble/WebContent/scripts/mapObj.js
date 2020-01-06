let landCard = new Array();
let landType = new Array();
let nomalLand = new Array();
let touristDestination = new Array();
let specialLand = new Array();

// 땅 배열
$.getJSON("/blue-marble/json/LandCard.json", function(json) {
	// landCard = json;
	$(json).each(function(index, item) {
		landCard.push(item)
	});
	//땅 수 : 40
	console.log("땅 수: ", landCard.length);
});
$.getJSON("/blue-marble/json/LandType.json", function(json) {
	$(json).each(function(index, item) {
		landType.push(item)
	});
});
$.getJSON("/blue-marble/json/NomalLand.json", function(json) {
	$(json).each(function(index, item) {
		nomalLand.push(item)
	});
});
$.getJSON("/blue-marble/json/TouristDestination.json", function(json) {
	$(json).each(function(index, item) {
		touristDestination.push(item)
	});
});
$.getJSON("/blue-marble/json/SpecialLand.json", function(json) {
	$(json).each(function(index, item) {
		specialLand.push(item)
	});
});