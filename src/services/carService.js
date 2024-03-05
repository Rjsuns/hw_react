import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll:() => apiService.get(urls.cars.base),
    updateById:(id, data) => apiService.put(urls.cars.byId(id), data),
    deleteById:(id) => apiService.delete(urls.cars.byId(id)),
    create:(data) => apiService.post(urls.cars.base, data)
}

export {
    carService
}