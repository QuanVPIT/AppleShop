var express = require("express");
var router = express.Router();
var UserController = require("../modules/users/UserController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// /* http://localhost:3000/users/api/register */
// router.post("/api/register", async function (req, res, next) {
//   try {
//     const { name, email, password, age, confirm_password } = req.body;
//     const user = await UserController.register(  name, email,password,age,confirm_password);
//     res.status(200).json({ user });
//   } catch (error) {
//     res.status(414).json({ error: error.message });
//     console.log(error);
//     next(error);
//   }
// });

/* http://localhost:3000/users/api/login */
router.post("/api/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UserController.login(email, password);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(401).json({ error: 'Sai email hoặc mật khẩu'});
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
    console.log(error);
    next(error);
  }
});

/*  http://localhost:3000/users/cpanel/login  */
router.get("/cpanel/login", async function (req, res, next) {
  res.render("login");
});


router.post("/cpanel/login", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    if ( email == 'admin@gmail.com' && password == '123' ) {
      res.render("index", { title: "Express", name: "Hoang" });
    } else {
      throw new Error("Sai email hoặc mật khẩu");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});


module.exports = router;
