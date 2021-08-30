"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsOperation = void 0;
var JsOperation = /** @class */ (function () {
    function JsOperation() {
    }
    // Addition method
    JsOperation.prototype.addition = function (values) {
        var decimals = this.maxDecimal(this.decimalOperandsArray(values));
        if (decimals)
            return values.reduce(function (a, b) { return a + Math.round((b * Math.pow(10, decimals))); }, 0) / Math.pow(10, decimals);
        return values.reduce(function (a, b) { return a + b; }, 0);
    };
    // subtraction method
    JsOperation.prototype.subtraction = function (values) {
        var decimals = this.maxDecimal(this.decimalOperandsArray(values));
        if (decimals)
            return values.reduce(function (a, b, index) {
                if (!index)
                    return b * Math.pow(10, decimals);
                return Math.round(a) - Math.round((b * Math.pow(10, decimals)));
            }, 0) / Math.pow(10, decimals);
        return values.reduce(function (a, b) { return a - b; }, 0);
    };
    // Multiplication method
    JsOperation.prototype.multiplication = function (values) {
        var decimals = this.maxDecimal(this.decimalOperandsArray(values));
        var i = 0;
        if (decimals)
            return values.reduce(function (a, b, index) {
                i++;
                if (!index)
                    return b * Math.pow(10, decimals);
                return Math.round(a) * Math.round((b * Math.pow(10, decimals)));
            }, 0) / Math.pow(10, (decimals * i));
        return values.reduce(function (a, b) { return a * b; }, 0);
    };
    // Division method
    JsOperation.prototype.division = function (values) {
        var _this = this;
        var decimals = this.maxDecimal(this.decimalOperandsArray(values));
        if (decimals)
            return values.reduce(function (a, b, index) {
                if (!index)
                    return b;
                decimals = _this.maxDecimal(_this.decimalOperandsArray([a, b]));
                return Math.round((a * Math.pow(10, decimals))) / Math.round((b * Math.pow(10, decimals)));
            }, 0);
        return values.reduce(function (a, b) { return a / b; }, 0);
    };
    // method to return an array of numbers indicating the number of decimals of operands
    JsOperation.prototype.decimalOperandsArray = function (array) {
        return array.map(function (number) {
            if ((number % 1) !== 0)
                return number.toString().split(".")[1].length;
            return 0;
        });
    };
    // function to decree the highest number of an Array
    JsOperation.prototype.maxDecimal = function (NumbersArray) {
        return Math.max.apply(Math, NumbersArray);
    };
    return JsOperation;
}());
exports.JsOperation = JsOperation;
