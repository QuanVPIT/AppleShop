

const iphoneService = require('./IphoneService');

const get = async () => {
    try {
        const iphones = await iphoneService.get();
        return iphones;
    } catch (error) {
        console.log(error);
    }
}

const create = async (name, param, image, year, categoryId) => {
    try {
        const iphone = await iphoneService.create(name, param, image, year, categoryId);
        return iphone;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (id) => {
    try {
        await iphoneService.remove(id);
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (id) => {
    try {
        const iphone = await iphoneService.getOne(id);
        return iphone;
    } catch (error) {
        console.log(error);
    }
}

const update = async (id, name, param, image, price, year, categoryId) => {
    try {
        const iphone = await iphoneService.update(id, name, param, image, price, year, categoryId);
        return iphone;
    } catch (error) {
        console.log(error);
    }
}


module.exports = { get, create, remove, getOne, update };