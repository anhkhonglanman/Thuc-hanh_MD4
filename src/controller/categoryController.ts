// import {Request, Response} from "express";
// import productService from "../service/productService";
//
//
// class ProductController {
//     private productService = productService
//     constructor() {
//         this.productService = productService
//     }
//
//     findAll = async (req: Request, res: Response) => {
//         let products = await this.productService.getAll()
//         res.render('index', {products : products})
//     }
//
//     showFormAdd = (req: Request, res: Response) => {
//         res.render('products/create')
//     }
//
//     showFromEdit = async (req: Request, res: Response) => {
//         let id = req.params.id
//         console.log(id)
//         res.render('products/edit', {products: await this.productService.findById(id)})
//     }
// }
//
// export default new ProductController();