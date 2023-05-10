import {Request, Response} from "express";
import productService from "../service/productService";
import categoryService from "../service/categoryService";


class ProductController {
    private productService = productService
    private categoryService = categoryService
    constructor() {
        this.productService = productService
        this.categoryService = categoryService
    }

    findAll = async (req: Request, res: Response) => {
            let listProduct = await this.productService.getAll()
            res.status(200).json(listProduct)
    }
    addProduct = async (req: Request, res: Response) => {
        if (!req.body.name) {
            res.status(400).json({
                message: 'ko tim thay'
            })
        } else {
            await this.productService.add(req.body)
            res.status(201).json({message: 'ok'})
        }
    }
    deleteProduct = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.productService.delete(id)
        res.status(200).json({message: 'xoa thanh cong'})
    }
    showFormUpdate = async (req: Request, res: Response) => {
        let id = req.params.id
        let product = await this.productService.findProductById(id);
        // console.log(product)
        res.status(200).json(product)
    }
    updateProduct = async (req: Request, res: Response) => {
        let id = req.params.id
        console.log(id)
        let updateProduct = req.body
        console.log(updateProduct)
        await this.productService.update(id, updateProduct)
        res.status(200).json({message: 'sua thanh cong'})
    }

}

export default new ProductController();