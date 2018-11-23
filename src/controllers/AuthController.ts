import * as mongoose from 'mongoose';
import * as passport from 'passport';
import { UserSchema } from '../models/UserSchema';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class AuthController {

    public home(req: Request, res: Response) {
        res.render('index', { user : req.params.user });
        // res.send("qwe");
    }

    public register(req: Request, res: Response) {
        // res.render('register');
    }

    public doRegister(req: Request, res: Response) {
        User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
            if (err) {
                // return res.render('register', { user : user });
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    }

    public login(req: Request, res: Response) {
        // res.render('login');
    }

    public doLogin(req: Request, res: Response) {
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    }

    public logout(req: Request, res: Response) {
        passport.logout(req, res);
        res.redirect('/');
    }

}