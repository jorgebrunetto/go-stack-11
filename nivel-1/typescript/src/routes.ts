import { Request, Response } from 'express';
import createUser from './services/CreateUser';
export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        name: 'Jorge',
        email: 'ojasdf@.com',
        password: 'salfdkjasdf',
        techs: [
            'react',
            'node',
            {
                title: 'js',
                experience: 199,
            },
        ],
    });
    return res.json({ message: 'hello world' });
}
