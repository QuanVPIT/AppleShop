var express = require('express');
var router = express.Router();

const MacController = require('../modules/macs/MacController');
const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');
const getConstant = require('../helper/constanst').getConstant;


/** 
 * WEB
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/san-pham1/
 */
router.get('/', async function (req, res, next) {
  let macs = await MacController.get();
  macs = macs.map((p, index) => {
    return {
      _id: p._id,
      name: p.name,
      image: p.image,
      year: p.year,
      categoryId: p.categoryId,
      index: index + 1,
    }
  });
  console.log(macs);
  res.render('macs/san-pham1', { sp: macs });
  //res.status(200).json(macs);
});

/**
 * xóa sản phẩm
 */
//http://localhost:3000:/san-pham1/:id
router.delete('/:id', async function (req, res, next) {
  console.log(">>>>>>");
  try {
    let { id } = req.params;
    await MacController.remove(id);
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
    const mac = await MacController.getOne(id);
    let categories = await CategoryController.get();
    categories = categories.map((p, index) => {
      return {
        _id: p._id,
        name: p.name,
        isSelected: p._id.toString() == mac.categoryId._id.toString(),
      }
    });
    res.render('macs/chinh-sua1', { mac, categories });
    //res.status(200).json({ mac, categories });
  } catch (error) {
    next(error);
  }
});

/**
 * Hiển thị cập nhật sản phẩm
 * https://localhost:3000/san-pham1/:id/detail
 */
router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
  try {
    let { file } = req;
    let { name, image, year, categoryId } = req.body;
    let { id } = req.params;
    image = file ? file.filename : '';
    image = image ? `${getConstant().HOST}/images/${image}` : '';
    await MacController.update(id, name, image, year, categoryId);
    res.redirect('/san-pham1');
    //res.status(200).json(macs);
  } catch (error) {
    console.log(error);
    next(error);
  }
});


/* GET home page. */
/*Hiển thị trang tạo mới sản phẩm*/
//http://localhost:3000/san-pham1/tao-moi1
router.get('/tao-moi1', async function (req, res, next) {
  const categories = await CategoryController.get();
  res.render('macs/tao-moi1', { categories });
});

/**
 * Lưu tạo mới sản phẩm
 * http://localhost:3000/san-pham1/tao-moi1
 */
router.post('/tao-moi1', [middleware.single('image'),], async function (req, res, next) {
  try {
    let { file } = req;
    let { name, image, year, categoryId } = req.body;
    image = file ? file.filename : '';
    image = image ? `${getConstant().HOST}/images/${image}` : '';
    await MacController.create(name, image, year, categoryId);
    res.redirect('/san-pham1');
  } catch (error) {
    console.log(error);
    next(error);
  }
});




// /** 
//  * API MOBILE
//  * Hiển thị trang danh sách sản phẩm 
//  * http://localhost:3000/san-pham1/
//  */
// router.get('/', async function (req, res, next) {
//   let macs = await MacController.get();
//   macs = macs.map((p, index) => {
//     return {
//       _id: p._id,
//       name: p.name,
//       image: p.image,
//       year: p.year,
//       categoryId: p.categoryId,
//       index: index + 1,
//     }
//   });
//   console.log(macs);
//   //res.render('macs/san-pham1', { sp:macs });
//   res.status(200).json(macs);
// });

// /**
// * xóa sản phẩm
// */
// //http://localhost:3000:/san-pham1/:id
// router.delete('/:id', async function (req, res, next) {
//   console.log(">>>>>>");
//   try {
//     let { id } = req.params;
//     await MacController.remove(id);
//     res.json({ status: true });
//   } catch (error) {
//     res.json({ status: false });
//   }
// });

// /**
// * Hiển thị trang chi tiết sản phẩm 
// * http://localhost:3000/san-pham1/:id/detail
// */

// router.get('/:id/detail', async function(req, res, next) {
//   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>"); 
//   try{
//     let { id } = req.params;
//     const mac = await MacController.getOne(id);
//     let categories = await CategoryController.get();
//     categories = categories.map((p, index) => {
//       return {
//         _id: p._id,
//         name: p.name,
//         isSelected: p._id.toString() == mac.categoryId._id.toString(),
//       }
//     });;
//     res.status(200).json({ mac, categories });
//   }catch(error){
//     next(error);
//   }
// });


// // router.get('/:id/detail', async function (req, res, next) {
// //   try {
// //     let { id } = req.params;
// //     const mac = await MacController.getOne(id);
// //     let categories = await CategoryController.get();
// //     categories = categories.map((p, index) => {
// //       return {
// //         _id: p._id,
// //         name: p.name,
// //         isSelected: p._id.toString() == mac.categoryId._id.toString(),
// //       }
// //     });
// //     //res.render('macs/chinh-sua1', { mac, categories });
// //     res.status(200).json({ mac, categories });
// //   } catch (error) {
// //     next(error);
// //   }
// // });

// /**
// * Hiển thị cập nhật sản phẩm
// * https://localhost:3000/san-pham1/:id/detail
// */
// router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
//   try {
//     let { file } = req;
//     let { name, image, year, categoryId } = req.body;
//     let { id } = req.params;
//     image = file ? file.filename : '';
//     image = image ? `${getConstant().HOST}/images/${image}` : '';
//     await MacController.update(id, name, image, year, categoryId);
//     //res.redirect('/san-pham1');
//     res.status(200).json(macs);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });



module.exports = router;
