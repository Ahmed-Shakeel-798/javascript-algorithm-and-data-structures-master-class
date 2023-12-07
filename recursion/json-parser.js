class JSONParser {
    constructor(jsonString) {
        this.jsonString = jsonString;
        this.index = 0;
    }

    parse() {
        const result = this.parseValue();
        this.skipWhitespace();
        if (this.hasMoreData()) {
            throw new Error(`Unexpected character at position ${this.index}`);
        }
        return result;
    }

    parseValue() {
        this.skipWhitespace();
        const currentChar = this.getCurrentChar();

        if (currentChar === '{') {
            return this.parseObject();
        } else if (currentChar === '[') {
            return this.parseArray();
        } else if (currentChar === '"') {
            return this.parseString();
        } else if (currentChar === '-' || (currentChar >= '0' && currentChar <= '9')) {
            return this.parseNumber();
        } else if (currentChar === 't' || currentChar === 'f' || currentChar === 'n') {
            return this.parseBooleanOrNull();
        } else {
            throw new Error(`Unexpected character at position ${this.index}`);
        }
    }

    parseObject() {
        const obj = {};
        this.consumeChar('{');

        while (this.getCurrentChar() !== '}') {
            const key = this.parseString();
            this.consumeChar(':');
            const value = this.parseValue();
            obj[key] = value;

            if (this.getCurrentChar() === ',') {
                this.consumeChar(',');
            } else {
                break;
            }
        }

        this.consumeChar('}');
        return obj;
    }

    parseArray() {
        const arr = [];
        this.consumeChar('[');

        while (this.getCurrentChar() !== ']') {
            const value = this.parseValue();
            arr.push(value);

            if (this.getCurrentChar() === ',') {
                this.consumeChar(',');
            } else {
                break;
            }
        }

        this.consumeChar(']');
        return arr;
    }

    parseString() {
        this.consumeChar('"');
        let result = '';

        while (this.getCurrentChar() !== '"') {
            result += this.getCurrentChar();
            this.index++;
        }

        this.consumeChar('"');
        return result;
    }

    parseNumber() {
        let result = '';

        while (this.isDigit(this.getCurrentChar()) || this.getCurrentChar() === '.') {
            result += this.getCurrentChar();
            this.index++;
        }

        return isNaN(result) ? null : parseFloat(result);
    }

    parseBooleanOrNull() {
        const word = this.consumeWord();
        if (word === 'true') {
            return true;
        } else if (word === 'false') {
            return false;
        } else if (word === 'null') {
            return null;
        } else {
            throw new Error(`Unexpected word at position ${this.index}`);
        }
    }

    consumeWord() {
        let result = '';

        while (this.isAlpha(this.getCurrentChar())) {
            result += this.getCurrentChar();
            this.index++;
        }

        return result;
    }

    consumeChar(expectedChar) {
        this.skipWhitespace();
        if (this.getCurrentChar() !== expectedChar) {
            throw new Error(`Expected '${expectedChar}' at position ${this.index}`);
        }
        this.index++;
        this.skipWhitespace();
    }

    skipWhitespace() {
        while (this.isWhitespace(this.getCurrentChar())) {
            this.index++;
        }
    }

    getCurrentChar() {
        return this.jsonString.charAt(this.index);
    }

    hasMoreData() {
        return this.index < this.jsonString.length;
    }

    isDigit(char) {
        return char >= '0' && char <= '9';
    }

    isAlpha(char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
    }

    isWhitespace(char) {
        return char === ' ' || char === '\t' || char === '\n' || char === '\r';
    }
}

const jsonString = '{"name": "John", "age": 30, "address": {"city": "New York", "country": "USA"}, "isStudent": false, "grades": [95, 87, 92]}';
const jsonParser = new JSONParser(jsonString);
const parsedObject = jsonParser.parse();
console.log(parsedObject);
