import {Request, Response, NextFunction} from "express";
import { AuthController } from "../controllers/AuthController";

export class Routes {

    public authController: AuthController = new AuthController();

    public routes(app): void {

        // TODO: blog rest api

        app.route('/').get(this.authController.home);
        // route to register page
        app.route('/register').get(this.authController.register);

        // route for register action
        app.route('/register').post(this.authController.doRegister);

        // route to login page
        app.route('/login').get(this.authController.login);

        // route for login action
        app.route('/login').post(this.authController.doLogin);

        // route for logout action
        app.route('/logout').get(this.authController.logout);

    }
}