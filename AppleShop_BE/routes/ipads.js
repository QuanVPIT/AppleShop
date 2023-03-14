var express = require('express');
var router = express.Router();

const IpadController = require('../modules/ipads/IpadController');
const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');
const getConstant = require('../helper/constanst').getConstant;


/** 
 * WEB 
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/san-pham4/
 */
router.get('/', async function (req, res, next) {
  let ipads = await IpadController.get();
  ipads = ipads.map((p, index) => {
    return {
      _id: p._id,
      name: p.name,
      image: p.image,
      year: p.year,
      categoryId: p.categoryId,
      index: index + 1,
    }
  });
  console.log(ipads);
  res.render('ipads/san-pham4', { sp: ipads });
  // res.status(200).json(ipads);
});

/**
* xóa sản phẩm
*/
//http://localhost:3000:/san-pham4/:id
router.delete('/:id', async function (req, res, next) {
  try {
    let { id } = req.params;
    await IpadController.remove(id);
    res.json({ status: true });
  } catch (error) {
    res.json({ status: false });
  }
});

/**
* Hiển thị trang chi tiết sản phẩm 
* http://localhost:3000/:id/detail
*/
router.get('/:id/detail', async function (req, res, next) {
  try {
    let { id } = req.params;
    const ipad = await IpadController.getOne(id);
    let categories = await CategoryController.get();
    categories = categories.map((p, index) => {
      return {
        _id: p._id,
        name: p.name,
        isSelected: p._id.toString() == ipad.categoryId._id.toString(),
      }
    });
    res.render('ipads/chinh-sua4', { ipad, categories });
    //res.status(200).json({ ipad, categories });
  } catch (error) {
    next(error);
  }
});

/**
* Hiển thị cập nhật sản phẩm
* https://localhost:3000/san-pham4/:id/detail
*/
router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
  try {
    let { file } = req;
    let { name, image, year, categoryId } = req.body;
    let { id } = req.params;
    image = file ? file.filename : '';
    image = image ? `${getConstant().HOST}/images/${image}` : '';
    await IpadController.update(id, name, image, year, categoryId);
    res.redirect('/san-pham4');
    // res.status(200).json(ipads);
  } catch (error) {
    console.log(error);
    next(error);
  }
});


/* GET home page. */
/*Hiển thị trang tạo mới sản phẩm*/
//http://localhost:3000/san-pham4/tao-moi4
router.get('/tao-moi4', async function (req, res, next) {
  const categories = await CategoryController.get();
  res.render('ipads/tao-moi4', { categories });
});


/**
* Lưu tạo mới sản phẩm
* http://localhost:3000/san-pham4/tao-moi4
*/
router.post('/tao-moi4', [middleware.single('image'),], async function (req, res, next) {
  try {
    let { file } = req;
    let { name, image, year, categoryId } = req.body;
    image = file ? file.filename : '';
    image = image ? `${getConstant().HOST}/images/${image}` : '';
    await IpadController.create(name, image, year, categoryId);
    res.redirect('/san-pham4');
  } catch (error) {
    console.log(error);
    next(error);
  }
});




// /** 
//  * API MOBILE
//  * Hiển thị trang danh sách sản phẩm 
//  * http://localhost:3000/san-pham4/
//  */
// router.get('/', async function (req, res, next) {
//   let ipads = await IpadController.get();
//   ipads = ipads.map((p, index) => {
//     return {
//       _id: p._id,
//       name: p.name,
//       image: p.image,
//       year: p.year,
//       categoryId: p.categoryId,
//       index: index + 1,
//     }
//   });
//   console.log(ipads);
//   //res.render('ipads/san-pham4', { sp: ipads });
//   res.status(200).json(ipads);
// });

// /**
// * xóa sản phẩm
// */
// //http://localhost:3000:/san-pham4/:id
// router.delete('/:id', async function (req, res, next) {
//   try {
//     let { id } = req.params;
//     await IpadController.remove(id);
//     res.json({ status: true });
//   } catch (error) {
//     res.json({ status: false });
//   }
// });

// /**
// * Hiển thị trang chi tiết sản phẩm 
// * http://localhost:3000/:id/detail
// */
// router.get('/:id/detail', async function (req, res, next) {
//   try {
//     let { id } = req.params;
//     const ipad = await IpadController.getOne(id);
//     let categories = await CategoryController.get();
//     categories = categories.map((p, index) => {
//       return {
//         _id: p._id,
//         name: p.name,
//         isSelected: p._id.toString() == ipad.categoryId._id.toString(),
//       }
//     });
//     //res.render('ipads/chinh-sua4', { ipad, categories });
//     res.status(200).json({ ipad, categories });
//   } catch (error) {
//     next(error);
//   }
// });

// /**
// * Hiển thị cập nhật sản phẩm
// * https://localhost:3000/san-pham4/:id/detail
// */
// router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
//   try {
//     let { file } = req;
//     let { name, image, year, categoryId } = req.body;
//     let { id } = req.params;
//     image = file ? file.filename : '';
//     image = image ? `${getConstant().HOST}/images/${image}` : '';
//     await IpadController.update(id, name, image, year, categoryId);
//     //res.redirect('/san-pham4');
//     res.status(200).json(ipads);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });


module.exports = router;