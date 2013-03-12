angular.module('clientApp', ['todos']).config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/todos', {
            templateUrl:'/todos/todo-list.html',
            controller:'TodoListController'
        });
        $routeProvider.otherwise({redirectTo:'/todos'});

    }
]);
