import fs from 'fs';
import { NextFunction, Request, Response } from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class NameController {
    async getAdjectives(req: Request, res: Response, next: NextFunction) {
        try {
            const adjData = await fs.readFileSync(path.join(__dirname, '../../db/adjectives.json'));
            console.log('adj middleware')
            console.log(adjData);
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