import {Request, Response} from "express";
import userService from "../service/userService";

class UserController {
    private userService
    constructor() {
        this.userService = userService
    }

    showFormLogin = async (req: Request, res: Response) => {
        res.render('users/login')
    }

    showFromRegister = async (req: Request, res: Response) => {
        res.render('users/register')
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkUser(req.body)
        if (!user) {
            res.redirect(301, '/users/login')
        } else {
            req.session['user'] = user;
            res.redirect(301,'/products')
        }
    }

    // addUser = async (req: Request, res: Response) => {
    //     // nếu chưa có tài khoản quay lại trang đăng nhập
    //     if (await userService.checkUserSignUp(req.body)) {
    //         res.redirect(301,'register')
    //     } else {
    //         await this.userService.addUser(req.body)
    //         res.redirect(301,'login')
    //     }
    // }
}

export default new UserController();