

const ipadService = require('./IpadService');

const get = async() =>{
    try{
        const ipads = await ipadService.get();
        return ipads;
    }catch(error){
        console.log(error);
    }
}

const create = async(name, image, year, categoryId) =>{
    try{
        const ipad = await ipadService.create(name, image, year, categoryId);
        return ipad;
    }catch(error){
        console.log(error);
    }
}

const remove = async(id) => {
    try{
        await ipadService.remove(id);
    }catch(error){
        console.log(error);
    }
}

const getOne = async(id) => {
    try{ 
        const ipad = await ipadService.getOne(id);
        return ipad;
        
    }catch(error){
        console.log(error);
    }
}    
  
const update = async (id, name, image, year, categoryId) => {
    try{
        const ipad = await ipadService.update(id, name, image, year, categoryId);
        return ipad;
    }catch(error){
        console.log(error);
    }
}


module.exports = { get, create, remove, getOne, update};