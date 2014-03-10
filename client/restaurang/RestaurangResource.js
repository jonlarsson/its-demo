angular.module("restauranger").factory("RestaurangResource",
    function ($resource) {
        return $resource("/api/restauranger/:id", {
            id: "@id"
        }, {
            update: {method: "PUT"},
            create: {method: "POST"}
        });
    }
);