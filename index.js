angular.module('ctrlInformacion', []).controller('ctrlInformacion', function($scope, $http) {
    console.log("Entro")
    $scope.getData = function() {
        var url = "https://script.google.com/macros/s/AKfycbx7Bcb7cVO71UhWp0lMtAk4ytgVWa59Mdp2cVGcPPsI228UnRZlWP1jkMhZk7ofNFSrmg/exec"
        $http.get(url)
            .then(function(response) {
                $scope.data = response.data.data;
            });
    }
    $scope.getData();
})