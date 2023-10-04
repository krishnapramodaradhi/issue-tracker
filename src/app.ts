import {Elysia} from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { pageRoutes } from './routes';

const app = new Elysia();
app.use(staticPlugin());

app.use(pageRoutes)

export default app;