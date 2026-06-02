"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.HttpCode = void 0;
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["CREATED"] = 201] = "CREATED";
    HttpCode[HttpCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpCode[HttpCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpCode[HttpCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpCode[HttpCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpCode[HttpCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpCode[HttpCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpCode || (exports.HttpCode = HttpCode = {}));
var Message;
(function (Message) {
    Message["SOMETHING_VENT_WRONG"] = "Something vent wrong!";
    Message["NO_DATA_FOUND"] = "no data is found!";
    Message["CREATED_FAILED"] = "Create is faile!";
    Message["UPDATE_FAILED"] = "Update is failed1";
    Message["USED_NICK_PHONE"] = "You are inserting already used phone or nick!";
    Message["NO_MEMBER_NICK"] = "No member with that member nick!";
    Message["WRONG_PASSWORD"] = "Wrong password, pleasse try again1";
})(Message || (exports.Message = Message = {}));
class Errors extends Error {
    constructor(statusCode, statusMessage) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}
exports.default = Errors;
