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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var os = __importStar(require("os"));
var path_1 = __importDefault(require("path"));
var md5_1 = __importDefault(require("md5"));
var bluebird_1 = __importDefault(require("bluebird"));
var fs_extra_1 = __importDefault(require("fs-extra"));
function createDeferred() {
    var resolve;
    var reject;
    var promise = new bluebird_1.default(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
    });
    return {
        //@ts-ignore
        resolve: resolve,
        reject: reject,
        promise: promise,
    };
}
function hash(contents) {
    return (0, md5_1.default)(contents);
}
function rmdir(dirPath) {
    return fs_extra_1.default.emptyDir(dirPath);
}
function tmpdir(dirname) {
    var pathParts = lodash_1.default.compact([os.tmpdir(), 'cypress', 'webpack-preprocessor', dirname]);
    return path_1.default.join.apply(path_1.default, pathParts);
}
exports.default = {
    createDeferred: createDeferred,
    hash: hash,
    rmdir: rmdir,
    tmpdir: tmpdir,
};
