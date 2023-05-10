// import {AppDataSource} from "../data-source";
// import {Product} from "../entity/product";
//
// class ProductService {
//     private productRepository;
//     constructor() {
//         this.productRepository = AppDataSource.getRepository(Product)
//     }
//     getAll = async () => {
//         let products = await this.productRepository.find({
//             relations: {
//                 category: true
//             }
//         })
//         return products
//     }
//     findProductById = async(id) =>{
//         let product = await this.productRepository.find({
//             relations: {
//                 category:true,
//             },
//             where: {
//                 id:id
//             }
//         });
//         return product;
//     }
//     add = async (product) => {
//         await this.productRepository.save(product)
//     }
//     delete = async (id) => {
//         await this.productRepository.delete({id: id})
//     }
//     update = async (id, updateProduct) => {
//         await this.productRepository.update({id: id}, updateProduct)
//     }
// }
// export default new ProductService();