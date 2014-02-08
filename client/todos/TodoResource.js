angular.module("todos").factory("Todo", [
    "$http",
    function ($http) {
        function Todo(data) {
            angular.copy(data, this);
        }

        Todo.list = function list() {
            return $http.get("/api/todos").then(function (result) {
                return result.data.map(function (todo) {
                    return new Todo(todo);
                });
            })
        };

        Todo.get = function get(id) {
            return $http.get("/api/todos/" + id);
        };

        Todo.prototype.url = function () {
            return "/api/todos/" + this.id;
        };

        Todo.prototype.save = function save() {
            var self = this;
            return $http.put(this.url(), this).then(function (result) {
                 return angular.copy(result.data, self);
            });
        };

        Todo.prototype.create = function create() {
            var self = this;
            return $http.post("/api/todos", this).then(function (result) {
                return angular.copy(result.data, self);
            });
        };

        Todo.prototype.remove = function remove() {
            return $http.delete(this.url());
        };

        return Todo;
    }
]);