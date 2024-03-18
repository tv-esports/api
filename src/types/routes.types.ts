import { Request, Response, NextFunction } from 'express';

/*
    HttpMethod to have autocomplete for the HTTP methods
*/
type HttpMethod = 'get' | 'post' | 'put' | 'delete';

interface ParamsDictionary {
    [key: string]: string;
}

type ControllerFunction<T> = (
    req: Request<ParamsDictionary, any, T>,
    res: Response,
    next: NextFunction
) => void;

/*
    Object to define the route structure
*/
export type Route<T> = {
    method: HttpMethod;
    path: string;
    controller: ControllerFunction<T>;
};