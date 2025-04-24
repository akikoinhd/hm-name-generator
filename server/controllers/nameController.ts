import fs from 'fs';
import { NextFunction, Request, Response } from 'express';

// const mainController = {};

// mainController.generate = (req, res, next) => {
//     try {
//         const adjData = fs.readFileSync('../../db/adjectives.json');
//         res.locals.adj = adjData;
//         return next();
//     }
// };

class NameController {
    async getAdjectives(req: Request, res: Response, next: NextFunction) {
        try {
            const adjData = await fs.readFileSync('../../db/adjectives.json');
            console.log('adj middleware')
            console.log(typeof(adjData));
            res.locals.adjectives = adjData;
            return next();
        } catch (e) {
            return next('Error getting adjectives: ' + e);
        }
    };

    async getNouns(req: Request, res: Response, next: NextFunction) {
        try {
            const nounData = await fs.readFileSync('../../db/nouns.json');
            console.log(nounData);
            res.locals.nouns = nounData;
            return next();
        } catch (e) {
            return next('Error getting nouns: ' + e);
        }
    };
}


export default new NameController();