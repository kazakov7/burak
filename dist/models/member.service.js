"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const member_enum_1 = require("../libs/enums/member.enum");
const errors_1 = __importStar(require("../libs/errors"));
const Member_models_1 = __importDefault(require("../schema/Member.models"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class MemberService {
    constructor() {
        this.memberModel = Member_models_1.default;
    }
    async processSignup(input) {
        const exist = await this.memberModel
            .findOne({ memberType: member_enum_1.MemberType.RESTARAUNT })
            .exec();
        if (exist)
            throw new errors_1.default(errors_1.HttpCode.BAD_REQUEST, errors_1.Message.CREATED_FAILED);
        const salt = await bcryptjs_1.default.genSalt();
        input.memberPassword = await bcryptjs_1.default.hash(input.memberPassword, salt);
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result;
        }
        catch (err) {
            throw new errors_1.default(errors_1.HttpCode.BAD_REQUEST, errors_1.Message.CREATED_FAILED);
        }
    }
    async processLogin(input) {
        const member = await this.memberModel
            .findOne({ memberNick: input.memberNick }, { memberNick: 1, memberPassword: 1 })
            .exec();
        if (!member) {
            throw new errors_1.default(errors_1.HttpCode.NOT_FOUND, errors_1.Message.NO_MEMBER_NICK);
        }
        const isMatch = input.memberPassword === member.memberPassword;
        if (!isMatch) {
            throw new errors_1.default(errors_1.HttpCode.UNAUTHORIZED, errors_1.Message.WRONG_PASSWORD);
        }
        return await this.memberModel.findById(member._id).exec();
    }
}
exports.default = MemberService;
