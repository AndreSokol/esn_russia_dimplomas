var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.STATIC_DIR + "up/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });


module.exports = function(app) {
    app.get("/", (req, res) => {res.render("index")});
}
