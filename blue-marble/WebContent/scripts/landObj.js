function landCard(no, name, type) {
	this.LandNo = LandNo; 
    this.LandName = LandName;
    this.type = type;
}
function nomalLand() {
	this.LandNo = LandNo; 
    this.LandName = LandName;
    this.type = type;
	this.LandPrice = LandPrice;
	this.VillaConstruction = VillaConstruction;
	this.buildingConstruction = buildingConstruction;
	this.hotelConstruction = hotelConstruction;
	this.LandFee = LandFee;
	this.Villa = Villa;
	this.building = building;
	this.hotel = hotel;
	this.owner = "0";
	this.villabuilt = "0";
	this.buildingbuilt = "0";
	this.hotelbuilt = "0";
}

function touristDestination() {
	this.LandNo = LandNo;
	this.LandName = LandName;
	this.LandPrice = LandPrice;
	this.LandTollFee =  LandTollFee;
	this.owner = "0";
}
function specialLand() {
	this.LandNo = LandNo;
	this.LandName = LandName;
	this.action = action;
}