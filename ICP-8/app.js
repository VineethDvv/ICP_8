var app = angular.module("nodeJsApp",[]);
app.controller('nodeJSController', function($scope, $http){

$scope.displayResults = function() {

    /** Retrieving the details from the user input **/
    $scope.nearbyLocation = $scope.location;
    $scope.searchQuery = $scope.search;
    $scope.venueList = [];
    if ($scope.nearbyLocation!== null && $scope.searchQuery!== null)
    {
        $http.get("https://api.foursquare.com/v2/venues/explore?client_id=JJIN0YA2LNDO51XWVQ3QJXGMZSZ20QFB5ZMODSBJAX11ZEPO&client_secret=UMRPZAFD2C3AREHQ3CPKMTPAEI0ICFYUPVOSCZCDZI3CRVFD&v=20180323&limit=3&near=" + $scope.nearbyLocation + "&query=" + $scope.searchQuery)
            .then(function (data) {
                //API call in the above line
                console.log(data.data.response);
                console.log(data.data.response.groups[0].items.length);
                console.log(data.data.response.groups[0].items[0].venue.location);
                for (var i = 0; i < data.data.response.groups[0].items.length;) {
                  $scope.venueList[i] = {
                        "name": data.data.response.groups[0].items[i].venue.name,
                        "location": data.data.response.groups[0].items[i].venue.location.address
                  };
                  i++;
                }
            });
    }
}
});