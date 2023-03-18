
const macModel = require('./MacModel');

const get = async () => {
    //select * form products
    const macs = await macModel.find({}).populate('categoryId', '_id name');
    return macs;
}


const getOne = async (id) => {
    //select * form products where id  = id
    const mac = await macModel.findById(id).populate('categoryId', '_id name'); //Object
    //const product =await productModel.findone({_id: id, name:'Iphone12'}); //object
    // const product = await productModel.find({}).populate('categoryId', '_id name');
    return mac;
    
}

const create = async (name, param, image, price, year, categoryId) => {
        //insert into products (name, price, image, description, category_id) 
        //values (name, price, image, description, category_id)
        const model = new macModel({ name, param, image, price, year, categoryId });
        await model.save();     
        return model;
}

const update = async (id, name, param, image, price, year, categoryId) =>{
    //update products set name = name, price = price, image = image, description = description categoryId
    //where id = id
    const mac = await macModel.findById(id);
    const model = await macModel.findByIdAndUpdate(id,
        {name, param, image: image ? image: mac.image, price, year, categoryId});
        return model;
}

const remove = async (id) => {
    //delete from products where id = id
    console.log(">>>>>>>>>");
    await macModel.deleteOne({_id: id});
}


module.exports = { get, create, getOne, update, remove };