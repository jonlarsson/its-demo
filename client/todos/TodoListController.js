angular.module("todos").controller("TodoListController", [
    "$scope", "TodoResource",
    function ($scope, TodoResource) {
        $scope.todos = TodoResource.query();
        $scope.todoText = "";

        $scope.addTodo = function () {
            var todo = new TodoResource({
                text: $scope.todoText,
                done: false
            });
            todo.$create();
            $scope.todos.push(todo);
            $scope.todoText = "";
        };

        $scope.remaining = function () {
            return $scope.todos.count(function (todo) {
                return !todo.done;
            });
        };

        $scope.archive = function () {
            $scope.todos.filter(function (todo) {
                return todo.done;
            }).forEach(function (todo) {
                    todo.$remove();
                });

            $scope.todos = $scope.todos.filter(function (todo) {
                return !todo.done;
            });
        }
    }

]);