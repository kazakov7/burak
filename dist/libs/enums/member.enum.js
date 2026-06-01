"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberStatus = exports.MemberType = void 0;
var MemberType;
(function (MemberType) {
    MemberType["USER"] = "USER";
    MemberType["RESTARAUNT"] = "RESTARAUNT";
})(MemberType || (exports.MemberType = MemberType = {}));
var MemberStatus;
(function (MemberStatus) {
    MemberStatus["ACTIVE"] = "ACTIVE";
    MemberStatus["BLOCK"] = "BLOCK";
    MemberStatus["DELETE"] = "DELETE";
})(MemberStatus || (exports.MemberStatus = MemberStatus = {}));
