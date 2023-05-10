import {AppDataSource} from "../data-source";
import {Car} from "../entity/car";

class CarService {
    private carRepository;
    constructor() {
        this.carRepository = AppDataSource.getRepository(Car)
    }

    getAll = async () => {
        let cars = await this.carRepository.find({
            relations : {
                brand : true
            }
        })
        return cars
    }

    add = async (car) => {
        await this.carRepository.save(car)
    }
}

export default new CarService()