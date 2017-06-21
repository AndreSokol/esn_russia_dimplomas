var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/up/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

var csv = require('csv'),
    fs = require('fs');


module.exports = function(app) {
    app.get("/", (req, res) => {res.render("index")});
    app.post("/upload", upload.single('pic'), (req, res) => {
        csv.parse(fs.readFileSync(req.file.path), (err, data) => {
            console.log(data);
            res.send(data);
        });
    });
}
