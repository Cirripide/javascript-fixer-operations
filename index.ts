export default class JsOperation {
    // Addition method
    public addition(...values: number[]): number {
        const decimals = this.maxDecimal(this.decimalOperandsArray(values));
        if (decimals)
            return values.reduce((a, b) => a + Math.round((b * Math.pow(10, decimals))), 0) / Math.pow(10, decimals);
        return values.reduce((a, b) => a + b, 0);
    }

    // subtraction method
    public subtraction(...values: number[]): number {
        const decimals = this.maxDecimal(this.decimalOperandsArray(values));
        if (decimals)
            return values.reduce((a, b, index) => {
                if (!index)
                    return b * Math.pow(10, decimals);
                return Math.round(a) - Math.round((b * Math.pow(10, decimals)));
            }, 0) / Math.pow(10, decimals);
        return values.reduce((a, b) => a - b, 0);
    }

    // Multiplication method
    public multiplication(...values: number[]): number {
        const decimals = this.maxDecimal(this.decimalOperandsArray(values));
        let i = 0;
        if (decimals)
            return values.reduce((a, b, index) => {
                i++;
                if (!index)
                    return b * Math.pow(10, decimals);
                return Math.round(a) * Math.round((b * Math.pow(10, decimals)));
            }, 0) / Math.pow(10, (decimals * i));
        return values.reduce((a, b) => a * b, 0);
    }

    // Division method
    public division(...values: number[]): number {
        let decimals = this.maxDecimal(this.decimalOperandsArray(values));
        if (decimals)
            return values.reduce((a, b, index) => {
                if (!index)
                    return b;
                decimals = this.maxDecimal(this.decimalOperandsArray([a, b]));
                return Math.round((a * Math.pow(10, decimals))) / Math.round((b * Math.pow(10, decimals)));
            }, 0);
        return values.reduce((a, b) => a / b, 0);
    }

    // method to return an array of numbers indicating the number of decimals of operands
    private decimalOperandsArray(array: number[]) {
        return array.map(number => {
            if ((number % 1) !== 0)
                return number.toString().split(".")[1].length;
            return 0;
        });
    }

    // function to decree the highest number of an Array
    private maxDecimal(NumbersArray: number[]): number {
        return Math.max(...NumbersArray);
    }
}
