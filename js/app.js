angular.module("MyMapApp", [])
	.controller("MapController", ["$http", function($http) {
		var vm = this;
		function getMapLocation() {
			alert("OK");
			var url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCC6y5Gph7oZCn6n6JVCNYLFxLDUrhnbws";

			$http({
				url: url,
				method: "POST"
			}).then(function successCallback(response){
				console.log("success!");
				console.log(response);
				vm.latitude = response.data.location.lat;
				vm.longitude = response.data.location.lng;
				alert(vm.latitude);
				alert(vm.longitude);
			}, function errorCallback(response) {
				console.log("there was an error");
				console.log(response);
			});


		}

		getMapLocation();


	}]);