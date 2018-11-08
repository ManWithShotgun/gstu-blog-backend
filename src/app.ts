import * as express from "express";
import * as bodyParser from "body-parser";
import * as expressSession from "express-session";
import { Routes } from "./routes/Routes";
import * as mongoose from "mongoose";
import * as passport from "passport";
import * as passportLocal from "passport-local";
import { model } from './models/UserSchema';

class App {

    public mongoUrl: string = 'mongodb://localhost/gstuBlogDb';
    public app: express.Application;
    public routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.mongoSetup();
        this.passportSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(expressSession({
            secret:"secret-key",
            resave: false,
            saveUninitialized: false
        }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

    private passportSetup(): void {
        passport.use(new passportLocal.Strategy(model.authenticate()));
        passport.serializeUser(model.serializeUser());
        passport.deserializeUser(model.deserializeUser());
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

}

export default new App().app;