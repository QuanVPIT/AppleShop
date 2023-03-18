

const macService = require('./MacService');

const get = async() =>{
    try{
        const macs = await macService.get();
        return macs;
    }catch(error){
        console.log(error);
    }
}

const create = async(name, param, image, price, year, categoryId) =>{
    try{
        const mac = await macService.create(name, param, image, price, year, categoryId);
        return mac;
    }catch(error){
        console.log(error);
    }
}

const getOne = async(id) => {
    try{ 
        const mac = await macService.getOne(id);
        return mac;
        
    }catch(error){
        console.log(error);
    }
}    
  
const update = async (id, name, param, image, price, year, categoryId) => {
    try{
        const mac = await macService.update(id, name, param, image, price, year, categoryId);
        return mac;
    }catch(error){
        console.log(error);
    }
}

const remove = async(id) => {
    try{
        await macService.remove(id);
    }catch(error){
        console.log(error);
    }
}


module.exports = { get, getOne, create, update, remove};