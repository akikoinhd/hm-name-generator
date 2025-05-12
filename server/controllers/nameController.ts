import fs from 'fs';
import { NextFunction, Request, Response } from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class NameController {
    async getAdjectives(req: Request, res: Response, next: NextFunction) {
        try {
            const genre: string = req.params.genre;
            const response: string = await fs.readFileSync(
                path.join(__dirname, '../../db/adjectives.json'),
                'utf-8');
            const adjData = JSON.parse(response);
            res.locals.adjectives = adjData[genre];
            return next();
        } catch (e) {
            return next('Error getting adjectives: ' + e);
        }
    };

    async getNouns(req: Request, res: Response, next: NextFunction) {
        try {
            const genre: string = req.params.genre;
            const response: string = await fs.readFileSync(
                path.join(__dirname, '../../db/nouns.json'),
                'utf-8');
                const nounData = JSON.parse(response);
            res.locals.nouns = nounData[genre];
            return next();
        } catch (e) {
            return next('Error getting nouns: ' + e);
        }
    };
}


export default new NameController();