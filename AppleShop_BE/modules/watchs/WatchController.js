

const watchService = require('./WatchService');

const get = async () => {
    try {
        const watchs = await watchService.get();
        return watchs;
    } catch (error) {
        console.log(error);
    }
}

const create = async (name, param, image, price, year, categoryId) => {
    try {
        const watch = await watchService.create(name, param, image, price, year, categoryId);
        return watch;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (id) => {
    try {
        await watchService.remove(id);
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (id) => {
    try {
        const watch = await watchService.getOne(id);
        return watch;

    } catch (error) {
        console.log(error);
    }
}

const update = async (id, name, param, image, price, year, categoryId) => {
    try {
        const watch = await watchService.update(id, name, param, image, price, year, categoryId);
        return watch;
    } catch (error) {
        console.log(error);
    }
}


module.exports = { get, create, remove, getOne, update };