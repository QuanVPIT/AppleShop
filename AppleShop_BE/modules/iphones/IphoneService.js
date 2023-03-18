
const iphoneModel = require('./IphoneModel');

const get = async () => {
    //select * form products
    const iphones = await iphoneModel.find({}).populate('categoryId', '_id name');
    return iphones;
}


const getOne = async (id) => {
    //select * form products where id  = id
    const iphone = await iphoneModel.findById(id).populate('categoryId', '_id name'); //Object
    //const product =await productModel.findone({_id: id, name:'Iphone12'}); //object
    // const product = await productModel.find({}).populate('categoryId', '_id name');

    return iphone;

}

const create = async (name, param, image, price, year, categoryId) => {
    //insert into products (name, price, image, description, category_id) 
    //values (name, price, image, description, category_id)
    const model = new iphoneModel({name, param, image, price, year, categoryId });
    await model.save();
    return model;
}

const update = async (id, name, param, image, price, year, categoryId) => {
    //update products set name = name, price = price, image = image, description = description categoryId
    //where id = id
    const iphone = await iphoneModel.findById(id);
    const model = await iphoneModel.findByIdAndUpdate(id,
        { name, param, image: image ? image : iphone.image, price, year, categoryId });
    return model;
}

const remove = async (id) => {
    //delete from products where id = id
    await iphoneModel.deleteOne({ _id: id });
}


module.exports = { get, create, remove, getOne, update };