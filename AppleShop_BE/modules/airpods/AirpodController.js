

const airpodService = require('./AirpodService');

const get = async() =>{
    try{
        const aipods = await airpodService.get();
        return aipods;
    }catch(error){
        console.log(error);
    }
}

const create = async(name, image, year, categoryId) =>{
    try{
        const airpod = await airpodService.create(name, image, year, categoryId);
        return airpod;
    }catch(error){
        console.log(error);
    }
}

const remove = async(id) => {
    try{
        await airpodService.remove(id);
    }catch(error){
        console.log(error);
    }
}

const getOne = async(id) => {
    try{ 
        const airpod = await airpodService.getOne(id);
        return airpod;
        
    }catch(error){
        console.log(error);
    }
}    
  
const update = async (id, name, image, year, categoryId) => {
    try{
        const airpod = await airpodService.update(id, name, image, year, categoryId);
        return airpod;
    }catch(error){
        console.log(error);
    }
}


module.exports = { get, create, remove, getOne, update};