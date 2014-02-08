var id = 0;
var todos = [
    {id: id++, text: "Tvätta", done: false},
    {id: id++, text: "Städa", done: false}
];

exports.list = function (req, res) {
    res.send(todos);
};

exports.get = function (req, res) {
    res.send(todos.find(function (todo) {
        return todo.id == req.params.id;
    }));
};

exports.create = function (req, res) {
    var todo = req.body;
    todo.id = id++;
    todos.push(todo);
    res.send(todo);
};

exports.update = function (req, res) {
    var todoFromUser = req.body;
    var todoInMemory = todos.find(function (todo) {
        return todo.id == req.params.id;
    });
    todoInMemory.text = todoFromUser.text;
    todoInMemory.done = todoFromUser.done;
    res.send(todoInMemory);
};

exports.remove = function (req, res) {
    todos = todos.filter(function (todo) {
        return todo.id != req.params.id;
    });
    res.send(204);
};