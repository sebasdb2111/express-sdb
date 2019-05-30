import jwt from 'jwt-simple';
import moment from 'moment';

export class Jwt {
    /**
     * createToken
     */
    public static createToken(user: any) {
        const payload = {
            email: user.email,
            exp: moment().add(30, 'days').unix(),
            iat: moment().unix(),
            name: user.name,
            role: user.role,
            sub: user._id,
            surname: user.surname
        };
        return jwt.encode(payload, 'secret_key');
    }
}
