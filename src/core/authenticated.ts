import jwt from 'jwt-simple';
import moment from 'moment';

export class Authenticated {
    /**
     * name
     */
    public static ensureAuth(req: any, res: any, next: any) {
        if (!req.headers.authorization) {
            return res.status(403).send({message: 'The request has not got authentication headers'});
        }
        const token = req.headers.authorization.replace(/['"]+/g, '');
        let payload;
        try {
            payload = jwt.decode(token, 'secret_key');
            if (payload.exp <= moment().unix()) {
                return res.status(401).send({
                    message: 'Token has expired'
                });
            }
        } catch (ex) {
            return res.status(404).send({
                message: 'Token is not valid'
            });
        }
        req.user = payload;
        next();
    }
}
