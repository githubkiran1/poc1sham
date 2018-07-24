class UserInformation {
	profileid : number = 0;	
  	fname : string = "";
  	lname : string = "";
  	logintype : string = "";
  	deviceid : string = "";
  	predictioninfo : PredictionInfo;
  	profilemeter : ProfileMeter;

  	constructor(values : Object = {}) {
	  Object.assign(this, values); 	
	}
}


class Category {
	code : string = "";
	name : string = "";
	checked : boolean = false;
}

class PredictionInfo {
	total : number = 0;
	success : number = 0;
	failure : number = 0;
}

class ProfileMeter {
	followers : number = 0;
	likes : number = 0;
}