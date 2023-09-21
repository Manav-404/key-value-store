import { ValueType } from "../models/ValueType";

export class ValueTypeFactory {
    public static getValueTypeEnum(value: any): ValueType | null{
        if(!isNaN(value)){
            return ValueType.Number
        }
        if(typeof value === 'string'){
            return ValueType.String
        }

        return null
    }
}