
const watchModel = require('./WatchModel');

const get = async () => {
    //select * form products
    const watchs = await watchModel.find({}).populate('categoryId', '_id name');
    return watchs;
}


const getOne = async (id) => {
    //select * form products where id  = id
    const watch = await watchModel.findById(id).populate('categoryId', '_id name'); //Object
    //const product =await productModel.findone({_id: id, name:'Iphone12'}); //object
    // const product = await productModel.find({}).populate('categoryId', '_id name');

    return watch;

}

const create = async (name, image, year, categoryId) => {
    //insert into products (name, price, image, description, category_id) 
    //values (name, price, image, description, category_id)
    const model = new watchModel({ name, image, year, categoryId });
    await model.save();
    return model;
}

const update = async (id, name, image, categoryId) => {
    //update products set name = name, price = price, image = image, description = description categoryId
    //where id = id
    const watch = await watchModel.findById(id);
    const model = await watchModel.findByIdAndUpdate(id,
        { name, image: image ? image : watch.image, year, categoryId });
    return model;
}

const remove = async (id) => {
    //delete from products where id = id
    await watchModel.deleteOne({ _id: id });
}


module.exports = { get, create, remove, getOne, update };