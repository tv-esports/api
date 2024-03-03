import { Router } from 'express';
import { userController } from './controllers/user';
import { Route } from './types/routes.types';

const router = Router();

const routes: Route<{ id: string }>[] = [
    {
        method: 'get',
        path: '/user/:id',
        controller: userController,
    },
];

for (const { method, path, controller } of routes) {
    (router as Router)[method](path, controller);
}

export default router;