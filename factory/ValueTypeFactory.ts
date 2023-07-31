import { ValueType } from "../models/ValueType";

export class ValueTypeFactory {
    public static getValueTypeEnum(value: any): ValueType | null{
        if(typeof value === 'number'){
            return ValueType.Number
        }
        if(typeof value === 'string'){
            return ValueType.String
        }

        return null
    }
}