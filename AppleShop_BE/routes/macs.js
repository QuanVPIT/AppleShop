var express = require('express');
var router = express.Router();

const MacController = require('../modules/macs/MacController');
const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');
const getConstant = require('../helper/constanst').getConstant;

// view engine setup

// const paypal = require('paypal-rest-sdk');

// //http://localhost:3000/san-pham1/pay
// paypal.configure({
//   'mode': 'sandbox', //sandbox or live
//   'client_id': 'AUkp8-zKRsky39r1CGyuC-t7kwREm_dt25WupbPTaA71uUqMyvccbVxHxg0jfEbJz_qSPbNgm6bfFP2F',
//   'client_secret': 'EEZhX8iYQ8Ez7h1W4PejcnY7mL8CjT9fMBWCR6dljV9oAbT1DdG5KsemUz9OLcCYv-7aCO0mqXJZYkaL'
// });


// router.get('/paypal', (req, res) => {
//   var create_payment_json = {
//     intent: "sale",
//     payer: {
//       payment_method: "paypal"
//     },
//     redirect_urls: {
//       return_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel"
//     },
//     transactions: [{
//       item_list: {
//         items: [{
//           name: "MacBook Air M2	",
//           sku: "001",
//           price: "1000000",
//           currency: "USD",
//           quantity: 1
//         }]
//       },
//       amount: {
//         currency: "USD",
//         total: "1000000"
//       },
//       description: "This is the payment description."
//     }]
//   };


//   paypal.payment.create(create_payment_json, function (error, payment) {
//     if (error) {
//       throw error;
//     } else {
//       console.log("Create Payment Response");
//       console.log(payment);
//       res.send('test');
//     }
//   });
// })

// router.get('/success', (req, res) => {
//   const payerId = req.body.PayerID;
//   const paymentId = req.body.paymentId;
//   const execute_payment_json = {
//     "payer_id": payerId,
//     "transactions": [{
//       "amount": {
//         "currency": "USD",
//         "total": "1000000"
//   }
// }]
// };
// paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
//   if(error){
//     console.log(error.response);
//     throw error;
//   }else{
//     console.log(JSON.stringify(payment));
//     res.send('success');
//   }
// });
// });

// router.get('/cancel', (req, res) => {
//   res.send('cancel');
// });

// /** 
// //  * WEB
// //  * Hiển thị trang danh sách sản phẩm 
// //  * http://localhost:3000/san-pham1/
// //  */
// router.get('/', async function (req, res, next) {
//   let macs = await MacController.get();
//   macs = macs.map((p, index) => {
//     return {
//       _id: p._id,
//       name: p.name,
//       param: p.param,
//       image: p.image,
//       price: p.price,
//       year: p.year,
//       categoryId: p.categoryId,
//       index: index + 1,
//     }
//   });
//   console.log(macs);
//   res.render('macs/san-pham1', { sp: macs });
//   //res.status(200).json(macs);
// });

// /**
//  * xóa sản phẩm
//  */
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
//  * Hiển thị trang chi tiết sản phẩm 
//  * http://localhost:3000/:id/detail
//  */
// router.get('/:id/detail', async function (req, res, next) {
//   try {
//     let { id } = req.params;
//     const mac = await MacController.getOne(id);
//     let categories = await CategoryController.get();
//     categories = categories.map((p, index) => {
//       return {
//         _id: p._id,
//         name: p.name,
//         isSelected: p._id.toString() == mac.categoryId._id.toString(),
//       }
//     });
//     res.render('macs/chinh-sua1', { mac, categories });
//     //res.status(200).json({ mac, categories });
//   } catch (error) {
//     next(error);
//   }
// });

// /**
//  * Hiển thị cập nhật sản phẩm
//  * https://localhost:3000/san-pham1/:id/detail
//  */
// router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
//   try {
//     let { file } = req;
//     let {name, param, image, price, year, categoryId } = req.body;
//     let { id } = req.params;
//     image = file ? file.filename : '';
//     image = image ? `${getConstant().HOST}/images/${image}` : '';
//     await MacController.update(id, name, param, image, price, year, categoryId);
//     res.redirect('/san-pham1');
//     //res.status(200).json(macs);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });


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
    let { name, param, image, price, year, categoryId } = req.body;
    image = file ? file.filename : '';
    image = image ? `${getConstant().HOST}/images/${image}` : '';
    await MacController.create(name, param, image, price, year, categoryId);
    res.redirect('/san-pham1');
  } catch (error) {
    console.log(error);
    next(error);
  }
});




/** 
 * API MOBILE
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/san-pham1/
 */
router.get('/', async function (req, res, next) {
  let macs = await MacController.get();
  macs = macs.map((p, index) => {
    return {
      _id: p._id,
      name: p.name,
      params: p.param,
      image: p.image,
      price: p.price,
      year: p.year,
      categoryId: p.categoryId,
      index: index + 1,
    }
  });
  console.log(macs);
  //res.render('macs/san-pham1', { sp:macs });
  res.status(200).json(macs);
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
* http://localhost:3000/san-pham1/:id/detail
*/

router.get('/:id/detail', async function(req, res, next) {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>"); 
  try{
    let { id } = req.params;
    const mac = await MacController.getOne(id);
    let categories = await CategoryController.get();
    categories = categories.map((p, index) => {
      return {
        _id: p._id,
        name: p.name,
        isSelected: p._id.toString() == mac.categoryId._id.toString(),
      }
    });;
    res.status(200).json({ mac, categories });
  }catch(error){
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
    let { name, param, image, price, year, categoryId } = req.body;
    let { id } = req.params;
    image = file ? file.filename : '';
    image = image ? `${getConstant().HOST}/images/${image}` : '';
    await MacController.update(id, name, param, image, price, year, categoryId);
    //res.redirect('/san-pham1');
    res.status(200).json(macs);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
