
// const macModel = require('./MacModel');
const airpodModel = require('./AirpodModel')

const get = async () => {
    //select * form products
    const airpods = await airpodModel.find({}).populate('categoryId', '_id name');
    return airpods;
}


const getOne = async (id) => {
    //select * form products where id  = id
    const airpods = await airpodModel.findById(id).populate('categoryId', '_id name'); //Object
    //const product =await productModel.findone({_id: id, name:'Iphone12'}); //object
    // const product = await productModel.find({}).populate('categoryId', '_id name');
    return airpods;
    
}

const create = async (name, param, image, price, year, categoryId) => {
        //insert into products (name, price, image, description, category_id) 
        //values (name, price, image, description, category_id)
        const model = new airpodModel({ name, param, image, price, year, categoryId });
        await model.save();     
        return model;
}

const update = async (id, name, param, image, price, year, categoryId ) =>{
    //update products set name = name, price = price, image = image, description = description categoryId
    //where id = id
    const airpod = await airpodModel.findById(id);
    const model = await airpodModel.findByIdAndUpdate(id,
        {name, param, image: image ? image: airpod.image, price, year, categoryId});
        return model;
}

const remove = async (id) => {
    //delete from products where id = id
    console.log(">>>>>>>>>");
    await airpodModel.deleteOne({_id: id});
}


module.exports = { get, create, getOne, update, remove };