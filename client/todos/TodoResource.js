angular.module("todos").factory("TodoResource", [
    "$resource",
    function ($resource) {
        var TodoResource = $resource("/api/todos/:id", {
            id: "@id"
        }, {
            update: {method: "PUT"},
            create: {method: "POST"}
        });
        return TodoResource;
    }
]);