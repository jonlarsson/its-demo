angular.module("todos").controller("TodoListController", [
    "$scope", "Todo",
    function ($scope, Todo) {

        $scope.todos = [];
        Todo.list().then(function (todos) {
            $scope.todos = todos;
        });

        $scope.todoText = "";

        $scope.addTodo = function () {
            var todo = new Todo({
                text: $scope.todoText,
                done: false
            });
            todo.create();
            $scope.todos.push(todo);
            $scope.todoText = "";
        };

        $scope.remaining = function () {
            return $scope.todos.count(function (todo) {
                return !todo.done;
            });
        };

        $scope.archivePossible = function () {
            return $scope.todos.some(function (todo) {
                return todo.done;
            });
        }

        $scope.archive = function () {
            $scope.todos.filter(function (todo) {
                return todo.done;
            }).forEach(function (todo) {
                    todo.remove();
                });

            $scope.todos = $scope.todos.filter(function (todo) {
                return !todo.done;
            });
        }
    }

]);