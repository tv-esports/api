import {Request, Response, NextFunction } from 'express';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

interface ParamsDictionary {
    [key: string]: string;
}

type ControllerFunction<T> = (
    req: Request<ParamsDictionary, any, T>,
    res: Response,
    next: NextFunction
) => void;

export type Route<T> = {
    method: HttpMethod;
    path: string;
    controller: ControllerFunction<T>;
};