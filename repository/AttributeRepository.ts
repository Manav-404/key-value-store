import { ValueType } from "../models/ValueType";

export class AttributeRepository {
    private attributes: Map<string, ValueType> = new Map<string, ValueType>();

    public setAttributeMetadata(key: string, value:ValueType){
        this.attributes.set(key, value);
    }

    public getAttributeMetadata(key: string){
        return this.attributes.get(key);
    }
}