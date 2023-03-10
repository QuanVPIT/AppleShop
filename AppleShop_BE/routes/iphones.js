var express = require('express');
var router = express.Router();

const IphoneController = require('../modules/iphones/IphoneController');
const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');
const getConstant = require('../helper/constanst').getConstant;

/** 
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/san-pham3/
 */
router.get('/', async function (req, res, next) {
    let iphones = await IphoneController.get();
    iphones = iphones.map((p, index) => {
        return {
            _id: p._id,
            name: p.name,
            image: p.image,
            year: p.year,
            categoryId: p.categoryId,
            index: index + 1,
        }
    });
    console.log(iphones);
    res.render('iphones/san-pham3', { sp: iphones });
    // res.status(200).json(iphones);
});

/**
 * xóa sản phẩm
 */
//http://localhost:3000:/san-pham3/:id
router.delete('/:id', async function (req, res, next) {
    try {
        let { id } = req.params;
        await IphoneController.remove(id);
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
        const iphone = await IphoneController.getOne(id);
        let categories = await CategoryController.get();
        categories = categories.map((p, index) => {
            return {
                _id: p._id,
                name: p.name,
                isSelected: p._id.toString() == iphone.categoryId._id.toString(),
            }
        });
        res.render('iphones/chinh-sua3', { iphone, categories });
        //res.status(200).json({ iphone, categories });
    } catch (error) {
        next(error);
    }
});

/**
 * Hiển thị cập nhật sản phẩm
 * https://localhost:3000/san-pham3/:id/detail
 */
router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file } = req;
        let { name, image, year, categoryId } = req.body;
        let { id } = req.params;
        image = file ? file.filename : '';
        image = image ? `${getConstant().HOST}/images/${image}` : '';
        await IphoneController.update(id, name, priname, image, year, categoryId);
        res.redirect('/san-pham3');
        // res.status(200).json(iphones);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


/* GET home page. */
/*Hiển thị trang tạo mới sản phẩm*/
//http://localhost:3000/san-pham3/tao-moi3
router.get('/tao-moi3', async function (req, res, next) {
    const categories = await CategoryController.get();
    res.render('iphones/tao-moi3', { categories });
});

/**
 * Lưu tạo mới sản phẩm
 * http://localhost:3000/san-pham3/tao-moi3
 */
router.post('/tao-moi3', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file } = req;
        let { name, image, year, categoryId } = req.body;
        image = file ? file.filename : '';
        image = image ? `${getConstant().HOST}/images/${image}` : '';
        await IphoneController.create(name, image, year, categoryId);
        res.redirect('/san-pham3');
    } catch (error) {
        console.log(error);
        next(error);
    }
});



module.exports = router;