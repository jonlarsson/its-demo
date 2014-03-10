angular.module("restauranger").controller("RestaurangController",
    function ($scope, RestaurangResource) {

        $scope.restauranger = RestaurangResource.query();

        $scope.restaurangNamn = "";

        $scope.laggTillRestaurang = function () {
            var restaurang = new RestaurangResource({
                namn: $scope.restaurangNamn,
                besokt: false
            });
            restaurang.$create();
            $scope.restauranger.push(restaurang);
            $scope.restaurangNamn = "";
        };

        $scope.kvarvarande = function () {
            return $scope.restauranger.count(function (restaurang) {
                return !restaurang.besokt;
            });
        };

        $scope.arkiveringMojligt = function () {
            return $scope.restauranger.some(function (restaurang) {
                return restaurang.besokt;
            });
        };

        $scope.arkivera = function () {
            $scope.restauranger.filter(function (restaurang) {
                return restaurang.besokt;
            }).forEach(function (restaurang) {
                    restaurang.$delete();
                });

            $scope.restauranger = $scope.restauranger.filter(function (restaurang) {
                return !restaurang.besokt;
            });
        }
    }

);