"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alias = void 0;
const storage_1 = require("../storage");
/**
 * Marks the given class or property as included. By default the property is included in both
 * constructorToPlain and plainToConstructor transformations. It can be limited to only one direction
 * via using the `toPlainOnly` or `toClassOnly` option.
 *
 * Can be applied to class definitions and properties.
 */
function Alias(options = {}) {
    /**
     * NOTE: The `propertyName` property must be marked as optional because
     * this decorator used both as a class and a property decorator and the
     * Typescript compiler will freak out if we make it mandatory as a class
     * decorator only receives one parameter.
     */
    return function (object, propertyName) {
        storage_1.defaultMetadataStorage.addExposeMetadata({
            target: object instanceof Function ? object : object.constructor,
            propertyName: propertyName,
            options: { name: options.from || propertyName, toClassOnly: true },
        });
        storage_1.defaultMetadataStorage.addExposeMetadata({
            target: object instanceof Function ? object : object.constructor,
            propertyName: propertyName,
            options: { name: options.to || propertyName, toPlainOnly: true },
        });
    };
}
exports.Alias = Alias;
//# sourceMappingURL=alias.decorator.js.map