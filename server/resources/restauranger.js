var id = 0;
var restauranger = [
    {id: id++, namn: "Kårhuset", besokt: false},
    {id: id++, namn: "Lingon", besokt: false}
];

exports.list = function (req, res) {
    res.send(restauranger);
};

exports.get = function (req, res) {
    res.send(restauranger.find(function (restaurang) {
        return restaurang.id == req.params.id;
    }));
};

exports.create = function (req, res) {
    var restaurang = req.body;
    restaurang.id = id++;
    restauranger.push(restaurang);
    res.send(restaurang);
};

exports.update = function (req, res) {
    var restaurangFromUser = req.body;
    var restaurangInMemory = restauranger.find(function (restaurang) {
        return restaurang.id == req.params.id;
    });
    restaurangInMemory.namn = restaurangFromUser.namn;
    restaurangInMemory.besokt = restaurangFromUser.besokt;
    res.send(restaurangInMemory);
};

exports.remove = function (req, res) {
    restauranger = restauranger.filter(function (restaurang) {
        return restaurang.id != req.params.id;
    });
    res.send(204);
};