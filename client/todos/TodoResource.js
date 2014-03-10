angular.module("todos").factory("TodoResource",
    function ($resource) {
        var TodoResource = $resource("/api/todos/:id", {
            id: "@id"
        }, {
            update: {method: "PUT"},
            create: {method: "POST"}
        });
        return TodoResource;
    }
);