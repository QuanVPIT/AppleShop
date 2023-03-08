var express = require('express');
var router = express.Router();

const ProductController = require('../modules/products/ProductController');
const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');
const getConstant = require('../helper/constanst').getConstant;

/** 
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/san-pham/
 */
router.get('/', async function (req, res, next) {
    let products = await ProductController.get();
    products = products.map((p, index) => {
        return {
            _id: p._id,
            name: p.name,
            price: p.price,
            quantity: p.quantity,
            image: p.image,
            description: p.description,
            categoryId: p.categoryId,
            index: index + 1,
        }
    });
    console.log(products);
    //res.render('products/san-pham', { sp: products });
     res.status(200).json(products);
});

/**
 * xóa sản phẩm
 */
//http://localhost:3000:/san-pham/:id
router.delete('/:id', async function (req, res, next) {
    try {
        let { id } = req.params;
        await ProductController.remove(id);
        res.json({ status: true });
    } catch (error) {
        res.json({ status: false });
    }
});

/**
 * Hiển thị trang chi tiết sản phẩm 
 * http://localhost:3000/:id/detail
 */
router.get('/:id/detai', async function (req, res, next) {
    try {
        let { id } = req.params;
        const product = await ProductController.getOne(id);
        let categories = await CategoryController.get();
        categories = categories.map((p, index) => {
            return {
                _id: p._id,
                name: p.name,
                isSelected: p._id.toString() == product.categoryId._id.toString(),
            }
        });
        //res.render('products/chinh-sua', { product, categories });
        res.status(200).json({ product, categories });
    } catch (error) {
        next(error);
    }
});

/**
* Hiển thị cập nhật sản phẩm
* https://localhost:3000/san-pham/:id/detai
*/
router.post('/:id/detai', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file } = req;
        let { name, price, quantity, image, description, categoryId } = req.body;
        let { id } = req.params;
        image = file ? file.filename : '';
        image = image ? `${getConstant().HOST}/images/${image}` : '';
        await ProductController.update(id, name, price, quantity, image, description, categoryId);
        //res.redirect('/san-pham');
         res.status(200).json(products);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


/* GET home page. */
/*Hiển thị trang tạo mới sản phẩm*/
//http://localhost:3000/san-pham/tao-moi
router.get('/tao-moi', async function (req, res, next) {
    const categories = await CategoryController.get();
    res.render('products/tao-moi', { categories });
});

/**
* Lưu tạo mới sản phẩm
* http://localhost:3000/san-pham/tao-moi
*/
router.post('/tao-moi', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file } = req;
        let { name, price, quantity, image, description, categoryId } = req.body;
        image = file ? file.filename : '';
        image = image ? `${getConstant().HOST}/images/${image}` : '';
        await ProductController.create(name, price, quantity, image, description, categoryId);
        res.redirect('/san-pham');
    } catch (error) {
        console.log(error);
        next(error);
    }
});




module.exports = router;