import { ValueType } from "./ValueType";

export class Attribute {
    private key: string;
    private valueType!: ValueType;
    private value: any;

    public constructor(key: string, value:any, valueType: ValueType){
        this.key = key;
        this.value = value;
        this.valueType = valueType;
    }

    public getKey(): string {
        return this.key;
    }

    public setKey(key: string): void {
        this.key = key;
    }

    public getValueType(): ValueType {
        return this.valueType;
    }

    public setValueType(valueType: ValueType): void {
        this.valueType = valueType;
    }

    public getValue(): any {
        return this.value;
    }

    public setValue(value: any): void {
        this.value = value;
    }

}