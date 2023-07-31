import { ValueTypeFactory } from "../factory/ValueTypeFactory";
import { Attribute } from "../models/Attribute";
import { Entry } from "../models/Entry";
import { PutStrategy } from "../strategy/put/PutStrategy";

export class PutService {
    private putStrategy : PutStrategy;
    public constructor(putStrategy: PutStrategy){
        this.putStrategy = putStrategy;
    }

    public put(commands: string[]){
        let attributes = [];
        let key = commands.shift()!;
        for(let i=0; i<commands.length-2; i+=2){
            let key = commands[i];
            let value = commands[i+1];
            let valueType = ValueTypeFactory.getValueTypeEnum(value);
            if(valueType === null){
                throw new Error('Invalid type for the value')
            }
            let attribute = new Attribute(key, value, valueType);
            attributes.push(attribute);
        }
        let entry = new Entry(attributes);
        this.putStrategy.put(key, entry);
    }
}