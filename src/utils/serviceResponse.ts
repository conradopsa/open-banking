import { Response } from 'express';
import { red } from 'chalk';

export function responseError500(error: Error, response: Response) {
    console.error(red(error.stack));
    response.status(500).json(error.message);
}

export function responseError404(response: Response, message: string = "Object not found") {
    response.status(404).send(message);
}
export function responseError409(response: Response, message: string = "Conflict") {
    response.status(409).send(message);
}

export function responseDeleted(response: Response, deletedObject: any) {
    return response.status(200).json(deletedObject);
}

export function responseNotFound(response: Response, message?: string) {
    const error: ErrorMessage = {
        message: message || "Nada encontrado"
    };

    return response.status(404).send(error);
}

export interface ErrorMessage {
    message: string,
    stack?: string
}

export interface ResponseError {
    error: ErrorMessage;
}

export interface ResponseSuccess {
    message: string;
}

export interface ResponseDeleted extends ResponseSuccess {
    deletedObject?: any;
}