"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMetadataStorage = void 0;
const MetadataStorage_1 = require("./MetadataStorage");
const utils_1 = require("./utils");
const globalScope = (0, utils_1.getGlobal)();
/**
 * Default metadata storage is used as singleton and can be used to storage all metadatas.
 */
if (!globalScope.classTransformerMetadataStorage) {
    globalScope.classTransformerMetadataStorage = new MetadataStorage_1.MetadataStorage();
}
exports.defaultMetadataStorage = globalScope.classTransformerMetadataStorage;
//# sourceMappingURL=storage.js.map