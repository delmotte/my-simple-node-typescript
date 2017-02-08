import {add} from './libs/utils';
import * as express from 'express';

const app: express.Application = express();

interface AddRequest extends express.Request {
    params: {
        x: string;
        y: string;
    }
}

app.get('/add/:x/:y', (req: AddRequest, res: express.Response) => {
    if (!req.params.x || !req.params.y) return res.status(400).json(new Error('x & y must be provided'));
    res.status(200).json(add(parseFloat(req.params.x), parseFloat(req.params.y)));
});

const server = app.listen(8080, () => {
    console.log('> Server is listening on port ' + server.address().port);
});
