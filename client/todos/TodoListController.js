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

        $scope.arkivera = function () {
            var grouped = $scope.todos.groupBy("done");
            $scope.todos = grouped[false] || [];
            if (grouped[true]) {
                grouped[true].forEach(function (todo) {
                    todo.$remove();
                });
            }
        }
    }

]);