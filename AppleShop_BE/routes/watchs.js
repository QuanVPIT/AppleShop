var express = require('express');
var router = express.Router();

const WatchController = require('../modules/watchs/WatchController');
const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');
const getConstant = require('../helper/constanst').getConstant;


/** 
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/san-pham5/
 */
router.get('/', async function (req, res, next) {
    let watchs = await WatchController.get();
    watchs = watchs.map((p, index) => {
        return {
            _id: p._id,
            name: p.name,
            image: p.image,
            year: p.year,
            categoryId: p.categoryId,
            index: index + 1,
        }
    });
    console.log(watchs);
    res.render('watchs/san-pham5', { sp: watchs });
    // res.status(200).json(watchs);
});

/**
 * xóa sản phẩm
 */
//http://localhost:3000:/san-pham5/:id
router.delete('/:id', async function (req, res, next) {
    try {
        let { id } = req.params;
        await WatchController.remove(id);
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
        const watch = await WatchController.getOne(id);
        let categories = await CategoryController.get();
        categories = categories.map((p, index) => {
            return {
                _id: p._id,
                name: p.name,
                isSelected: p._id.toString() == watch.categoryId._id.toString(),
            }
        });
        res.render('watchs/chinh-sua5', { watch, categories });
        //res.status(200).json({ watch, categories });
    } catch (error) {
        next(error);
    }
});

/**
 * Hiển thị cập nhật sản phẩm
 * https://localhost:3000/san-pham5/:id/detail
 */
router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file } = req;
        let { name, image, year, categoryId} = req.body;
        let { id } = req.params;
        image = file ? file.filename : '';
        image = image ? `${getConstant().HOST}/images/${image}` : '';
        await WatchController.update(id, name, image, year, categoryId);
        res.redirect('/san-pham5');
        // res.status(200).json(watchs);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


/* GET home page. */
/*Hiển thị trang tạo mới sản phẩm*/
//http://localhost:3000/san-pham5/tao-moi5
router.get('/tao-moi5', async function (req, res, next) {
    const categories = await CategoryController.get();
    res.render('watchs/tao-moi5', { categories });
});

/**
 * Lưu tạo mới sản phẩm
 * http://localhost:3000/san-pham5/tao-moi5
 */
router.post('/tao-moi5', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file } = req;
        let { name, image, year, categoryId } = req.body;
        image = file ? file.filename : '';
        image = image ? `${getConstant().HOST}/images/${image}` : '';
        await WatchController.create(name, image, year, categoryId);
        res.redirect('/san-pham5');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;