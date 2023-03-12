var express = require('express');
var router = express.Router();

const AirpodController = require('../modules/airpods/AirpodController');
const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');
const getConstant = require('../helper/constanst').getConstant;


// /** 
//  * Hiển thị trang danh sách sản phẩm 
//  * WEB
//  * http://localhost:3000/san-pham2/
//  */
// router.get('/', async function (req, res, next) {
//     let airpods = await AirpodController.get();
//     airpods = airpods.map((p, index) => {
//         return {
//             _id: p._id,
//             name: p.name,
//             image: p.image,
//             year: p.year,
//             categoryId: p.categoryId,
//             index: index + 1,
//         }
//     });
//     console.log(airpods);
//     res.render('airpods/san-pham2', { sp: airpods });
//     // res.status(200).json(airpods);
// });

// /**
//  * xóa sản phẩm
//  * API
//  */
// //http://localhost:3000:/san-pham2/:id
// router.delete('/:id', async function (req, res, next) {
//     try {
//         let { id } = req.params;
//         await AirpodController.remove(id);
//         res.json({ status: true });
//     } catch (error) {
//         res.json({ status: false });
//     }
// });

// /**
//  * Hiển thị trang chi tiết sản phẩm 
//  * WEB
//  * http://localhost:3000/:id/detail
//  */
// router.get('/:id/detail', async function (req, res, next) {
//     try {
//         let { id } = req.params;
//         const airpod = await AirpodController.getOne(id);
//         let categories = await CategoryController.get();
//         categories = categories.map((p, index) => {
//             return {
//                 _id: p._id,
//                 name: p.name,
//                 isSelected: p._id.toString() == airpod.categoryId._id.toString(),
//             }
//         });
//         res.render('airpods/chinh-sua2', { airpod, categories });
//         //res.status(200).json({ airpod, categories });
//     } catch (error) {
//         next(error);
//     }
// });

// /**
//  * Hiển thị cập nhật sản phẩm
//  * WEB
//  * https://localhost:3000/san-pham2/:id/detail
//  */
// router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
//     try {
//         let { file } = req;
//         let { name, image, year, categoryId } = req.body;
//         let { id } = req.params;
//         image = file ? file.filename : '';
//         image = image ? `${getConstant().HOST}/images/${image}` : '';
//         await AirpodController.update(id, name, image, year, categoryId);
//         res.redirect('/san-pham2');
//         // res.status(200).json(airpods);
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// });


// /* GET home page. */
// /*Hiển thị trang tạo mới sản phẩm*/
// //http://localhost:3000/san-pham2/tao-moi2
// router.get('/tao-moi2', async function (req, res, next) {
//     const categories = await CategoryController.get();
//     res.render('airpods/tao-moi2', { categories });
// });

// /**
//  * Lưu tạo mới sản phẩm
//  * http://localhost:3000/san-pham2/tao-moi2
//  */
// router.post('/tao-moi2', [middleware.single('image'),], async function (req, res, next) {
//     try {
//         let { file } = req;
//         let { name, image, year, categoryId } = req.body;
//         image = file ? file.filename : '';
//         image = image ? `${getConstant().HOST}/images/${image}` : '';
//         await AirpodController.create(name, image, year, categoryId);
//         res.redirect('/san-pham2');
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// });



/* API MOBILE */

/** 
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/san-pham2/
 */
router.get('/', async function (req, res, next) {
    let airpods = await AirpodController.get();
    airpods = airpods.map((p, index) => {
        return {
            _id: p._id,
            name: p.name,
            image: p.image,
            year: p.year,
            categoryId: p.categoryId,
            index: index + 1,
        }
    });
    console.log(airpods);
    // res.render('airpods/san-pham2', { sp: airpods });
    res.status(200).json(airpods);
});

/**
 * xóa sản phẩm
 */
//http://localhost:3000:/san-pham2/:id
router.delete('/:id', async function (req, res, next) {
    try {
        let { id } = req.params;
        await AirpodController.remove(id);
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
        const airpod = await AirpodController.getOne(id);
        let categories = await CategoryController.get();
        categories = categories.map((p, index) => {
            return {
                _id: p._id,
                name: p.name,
                isSelected: p._id.toString() == airpod.categoryId._id.toString(),
            }
        });
        //res.render('airpods/chinh-sua2', { airpod, categories });
        res.status(200).json({ airpod, categories });
    } catch (error) {
        next(error);
    }
});

/**
 * Hiển thị cập nhật sản phẩm
 * https://localhost:3000/san-pham2/:id/detail
 */
router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file } = req;
        let { name, image, year, categoryId } = req.body;
        let { id } = req.params;
        image = file ? file.filename : '';
        image = image ? `${getConstant().HOST}/images/${image}` : '';
        await AirpodController.update(id, name, image, year, categoryId);
        //res.redirect('/san-pham2');
        res.status(200).json(airpods);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;