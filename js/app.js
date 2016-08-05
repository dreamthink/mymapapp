// declare global variables
var latitude, longitude, town, country;

angular.module("MyMapApp", [])
	.controller("MapController", ["$http", function($http) {
		var vm = this;
	// set Fahrenheit
		vm.weatherF = true;
		vm.weatherC = false;

	// get geolocation coordinate susing Google Map API to bypass Chrome geolocation restriction to https only
		function getMapLocation() {
			var url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCC6y5Gph7oZCn6n6JVCNYLFxLDUrhnbws";
			$http({
				url: url,
				method: "POST"
			}).then(function successCallback(response){
				console.log("geolocation coordinate success");
				console.log(response);
				vm.latitude = response.data.location.lat;
				vm.longitude = response.data.location.lng;
				latitude = vm.latitude;
				longitude = vm.longitude;
			// get values in Fahrenheit as default value
				vm.getWeatherF();
			}, function errorCallback(response) {
				console.log("geolocation coordinate error");
				console.log(response);
			});
		}
		getMapLocation();

	// get values in Fahrenheit using "imperial" units
		 vm.getWeatherF = function() {
		 	vm.weatherF = true;
		 	vm.weatherC = false;
			var url = "http://api.openweathermap.org/data/2.5/weather";
			var APIKEY = "3cf58566cfe72e04e12f3a19d54e08dd";
			var params = {
				APPID: APIKEY,
				lat: latitude,
				lon: longitude,
				units: "imperial"
			};
		
			$http({
				method: "GET",
				url: url,
				params: params
			}).then(function successCallback(responseWeather) {
				console.log("Weather fahrenheit success");
				console.log(responseWeather);
				console.log(responseWeather.data.main.temp);
				vm.tempF = responseWeather.data.main.temp;
				vm.town = responseWeather.data.name;
				town = responseWeather.data.name;
				vm.country = responseWeather.data.sys.country;
				country = responseWeather.data.sys.country;
				vm.description = responseWeather.data.weather[0].description;
				vm.icon = responseWeather.data.weather[0].icon;
				vm.get5DayForecast();
			}, function errorCallback(responseWeather) {
				console.log("Weather fahrenheit error");
				console.log(responseWeather);
			});
		};
	
	// get values in Celsius using "metric" units
		vm.getWeatherC = function() {
			vm.weatherF = false;
			vm.weatherC = true;
			var url = "http://api.openweathermap.org/data/2.5/weather";
			var APIKEY = "3cf58566cfe72e04e12f3a19d54e08dd";
			var params = {
				APPID: APIKEY,
				lat: latitude,
				lon: longitude,
				units: "metric"
			};
			$http({
				method: "GET",
				url: url,
				params: params
			}).then(function successCallback(responseWeather) {
				console.log("Weather celsius success");
				console.log(responseWeather);
				console.log(responseWeather.data.main.temp);
				vm.tempC = responseWeather.data.main.temp;
			}, function errorCallback(responseWeather) {
				console.log("Weather celsius error");
				console.log(responseWeather);
			});
		};

	// get 5-day forecast
		vm.get5DayForecast = function() {
			var url = "http://api.openweathermap.org/data/2.5/forecast";
			var APIKEY = "3cf58566cfe72e04e12f3a19d54e08dd";
			var params = {
				q: town + "," + country,
				APPID: APIKEY
			};
			$http({
				method: "GET",
				url: url,
				params: params
				}).then(function successCallback(response5day) {
				console.log("5 day forecast success");
				console.log(response5day);
				vm.fiveDayForecast1 = response5day.data.list[5].dt_txt;
				vm.fiveDayForecast2 = response5day.data.list[13].dt_txt;
				vm.fiveDayForecast3 = response5day.data.list[21].dt_txt;
				vm.fiveDayForecast4 = response5day.data.list[29].dt_txt;
				vm.fiveDayForecast5 = response5day.data.list[37].dt_txt;
				vm.icon1 = response5day.data.list[5].weather[0].icon;
				vm.icon2 = response5day.data.list[13].weather[0].icon;
				vm.icon3 = response5day.data.list[21].weather[0].icon;
				vm.icon4 = response5day.data.list[29].weather[0].icon;
				vm.icon5 = response5day.data.list[37].weather[0].icon;
				vm.fiveDayForecastDescription1 = response5day.data.list[5].weather[0].description;
				vm.fiveDayForecastDescription2 = response5day.data.list[13].weather[0].description;
				vm.fiveDayForecastDescription3 = response5day.data.list[21].weather[0].description;
				vm.fiveDayForecastDescription4 = response5day.data.list[29].weather[0].description;
				vm.fiveDayForecastDescription5 = response5day.data.list[37].weather[0].description;
			}, function errorCallback(response5day) {
				console.log("5 day forecast error");
				console.log(response5day);
			});
		};

}]);

