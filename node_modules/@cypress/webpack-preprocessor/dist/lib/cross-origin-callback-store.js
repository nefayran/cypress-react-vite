"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossOriginCallbackStore = exports.CrossOriginCallbackStore = void 0;
var CrossOriginCallbackStore = /** @class */ (function () {
    function CrossOriginCallbackStore() {
        this.files = {};
    }
    CrossOriginCallbackStore.prototype.addFile = function (sourceFilePath, file) {
        this.files[sourceFilePath] = (this.files[sourceFilePath] || []).concat(file);
    };
    CrossOriginCallbackStore.prototype.hasFilesFor = function (sourceFiles) {
        var _a;
        return !!((_a = this.getFilesFor(sourceFiles)) === null || _a === void 0 ? void 0 : _a.length);
    };
    CrossOriginCallbackStore.prototype.getFilesFor = function (sourceFiles) {
        var _this = this;
        return Object.keys(this.files).reduce(function (files, sourceFilePath) {
            return sourceFiles.includes(sourceFilePath) ? files.concat(_this.files[sourceFilePath]) : files;
        }, []);
    };
    CrossOriginCallbackStore.prototype.reset = function (sourceFilePath) {
        this.files[sourceFilePath] = [];
    };
    return CrossOriginCallbackStore;
}());
exports.CrossOriginCallbackStore = CrossOriginCallbackStore;
exports.crossOriginCallbackStore = new CrossOriginCallbackStore();
