var app=angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/formvalidator.html"
  })
  $routeProvider.when("/search", {
    templateUrl: "templates/addressbook1.html"
  })
});


app.controller("FormCtrl",function($scope, $location){
	$scope.submit= function (){

		var isFormValid = true;
		
		if (!isValidName($scope.name)) {
			alert("Name cannot be left empty");
			isFormValid=false;
		} 

		if (!isValidPhone($scope.phone)) {
			alert("Phone needs to be in proper format: XXX-XXX-XXXX");
			isFormValid=false;

		}

		if (!isValidEmail($scope.email)) {
			alert("Email needs to be in proper format");
			isFormValid=false;
		}

		if (!isValidPassword($scope.password)) {
			alert("Password needs to be 6 characters or more");
			isFormValid=false;
		}

		if ($scope.password2!==$scope.password) {
			alert("Passwords must match");
			isFormValid=false;
		}

		if (isFormValid) {
			$location.path('/search');

		}

        
    	
	}
	
		var isValidName = function(name) {
				if (name && name.length>0) {
					return true;
				} else {
					return false;
				}
			}

			var isValidPhone= function(phone) {  
				if (phone) {
				var phoneTest=phone.split('-');
					if(phoneTest.length !==3) {
						return false;
					}
						else if((phoneTest[0].length !==3) || (phoneTest[0] == NaN)) {
							return false;
						}
						else if((phoneTest[1].length !==3) || (phoneTest[1] == NaN)) {
							return false;
						}
						else if((phoneTest[2].length !==4) || (phoneTest[2] == NaN)) {
							return false;
						}
						else {
							return true;
						}
				}
			}

			var isValidEmail= function(email) {
				if (email) {
					var emailTest=email.split('@');
					if(emailTest.length !==2) {
						return false;
					}
					else {
						var emailTest2=emailTest[1].split('.');
						if (emailTest2.length !==2) {
							return false;
						}
						else {
							return true;
						}
					}
				}

			}

			var isValidPassword= function(password) {
				if (password && password.length>=6) {
					return true;
				} else {
					return false;
				}
			}




});


app.controller("AddressCtrl",function($scope){
	$scope.name="";
	$scope.phone="";
	$scope.items=[];



	$scope.addItem=function(){
		$scope.items.push($scope.name);
			$scope.items.push($scope.phone);
			$scope.name="";
			$scope.phone="";
	};

	$scope.addName= function (){


		var isFormValid=true;

		
		if (!isValidName($scope.name)) {
			alert("Name cannot be left empty");
			isFormValid=false;
		} 

		if (!isValidPhone($scope.phone)) {
			alert("Phone needs to be in proper format: XXX-XXX-XXXX");
			isFormValid=false;
		}

		if (isFormValid) {
			//$scope.showForm=false;
			alert("Congratulations! Your contact info has been successfully added to the address book!");

		}

	}
	
			var isValidName = function(name) {
				if (name && name.length>0) {
					return true;
				} else {
					return false;
				}
			}

			var isValidPhone= function(phone) {  
				if (phone) {
				var phoneTest=phone.split('-');
					if(phoneTest.length !==3) {
						return false;
					}
						else if((phoneTest[0].length !==3) || (phoneTest[0] == NaN)) {
							return false;
						}
						else if((phoneTest[1].length !==3) || (phoneTest[1] == NaN)) {
							return false;
						}
						else if((phoneTest[2].length !==4) || (phoneTest[2] == NaN)) {
							return false;
						}
						else {
							return true;
						}
				}
			}

});
	