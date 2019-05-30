import Boom from 'boom';
import { isUndefined } from 'util';
import HttpStatus from 'http-status-codes';

export class ApiError {

    /**
     * Generates a boom bad request error:
     * {
     *   "statusCode": 400,
     *   "error": "Bad Request",
     *   "message": "query and body ids are different",
     *   "errorCode": "GTSI_ERROR_0006"
     * }
     *
     * @param statusCode error status code
     * @param errorCode code to identify the error
     * @param message (optional) error description, just for information
     * @param data (optional) data attached to the error specifying extra information about it
     */
    public static generic(statusCode: number, errorCode: string, message?: string, data?: any) {
        const error: Boom = new Boom(message, {
            statusCode,
        });
        (error.output.payload as any).errorCode = errorCode;
        if (!isUndefined(data)) {
            (error.output.payload as any).data = data;
        }
        return error;
    }

    /**
     * Generates a boom bad request error:
     * {
     *   "statusCode": 400,
     *   "error": "Bad Request",
     *   "message": "query and body ids are different",
     *   "errorCode": "GTSI_ERROR_0006"
     * }
     *
     * @param errorCode code to identify the error
     * @param message (optional) error description, just for information
     * @param data (optional) data attached to the error specifying extra information about it
     */
    public static badRequest(errorCode: string, message?: string, data?: any) {
        return this.generic(HttpStatus.BAD_REQUEST, errorCode, message, data);
    }
}