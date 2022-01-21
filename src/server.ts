import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import './database'

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


const start = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export { start }