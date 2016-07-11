var latitude;
var longitude;

angular.module("MyMapApp", [])
	.controller("MapController", ["$http", function($http) {
		var vm = this;


		function getWeather() {
			var url = "https://api.openweathermap.org/data/2.5/weather";
			var	APIKEY = "3cf58566cfe72e04e12f3a19d54e08dd";

			$http({
				method: "GET",
				url: url,
				APPID: APIKEY,
				lat: latitude,
				lon: longitude
			}).then(function successCallback(response) {
				console.log("Weather success");
				console.log(response);
				vm.description = response.weather.desription;
			}, function errorCallback(response) {
				console.log("Weather error");
				console.log(response);
			});
		}


		function getMapLocation() {
			var url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCC6y5Gph7oZCn6n6JVCNYLFxLDUrhnbws";

			$http({
				url: url,
				method: "POST"
			}).then(function successCallback(response){
				console.log("geolocation coordinate success!");
				console.log(response);
				vm.latitude = response.data.location.lat;
				vm.longitude = response.data.location.lng;
				latitude = vm.latitude;
				longitude = vm.longitude;
				getWeather();
			}, function errorCallback(response) {
				console.log("geolocation coordinate error");
				console.log(response);
			});
		}

		getMapLocation();




		function getWeather() {
			var url = "http://api.openweathermap.org/data/2.5/weather";
			var APIKEY = "3cf58566cfe72e04e12f3a19d54e08dd";
			var params = {
				APPID: APIKEY,
				lat: latitude,
				lon: longitude
			};

			$http({
				method: "GET",
				url: url,
				params: params
			}).then(function successCallback(responseWeather) {
				console.log("Weather success");
				console.log(responseWeather);
				
			}, function errorCallback(responseWeather) {
				console.log("Weather error");
				console.log(responseWeather);
			});
		}
	


	}]);