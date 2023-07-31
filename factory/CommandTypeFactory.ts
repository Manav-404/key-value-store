import { CommandType } from "../models/CommandType"

export class CommandTypeFactory {
    public static getCommandTypeEnum(value: any): CommandType | null{
        if(value === 'put'){
            return CommandType.put
        }
        if(value === 'search'){
            return CommandType.search
        }

        if(value === 'delete'){
            return CommandType.delete
        }

        return null
    }
}