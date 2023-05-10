import carService from "../service/carService";
import {Request, Response} from "express";

class CarController {
    private carService = carService
    constructor() {
        this.carService = carService
    }

    findAll = async (req: Request, res: Response) => {
            let listCar = await this.carService.getAll()
            res.status(200).json(listCar)
    }
}

export default new CarController()