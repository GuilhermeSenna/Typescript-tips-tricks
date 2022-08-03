import express from 'express'

import { z } from "zod";
import { Router, Request, Response } from 'express';

const app = express();
const route = Router()
app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

route.post('/', (req: Request, res: Response) => {

    const { x } = req.body;

    const mySchema = z.string();

    try {
        mySchema.parse(x);
    } catch (error) {
        if (error instanceof z.ZodError)
            return res.status(400).json(error.issues)
    }

});

app.use(route)


app.listen(3333, () => 'server running on port 3333')

export default 1;
