import Boom from 'boom'
import {Request, Response} from "express";

export function apiFailAction(request: Request, response: Response, err: any, showErrors?: boolean) {
    console.log("error: ", err);
    if (showErrors === true) {
      throw err;
    }
    throw Boom.badRequest("Invalid input");
}