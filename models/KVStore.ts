import { Entry } from "./Entry";

export class KVStore{
    private kVMap: Map<string, Entry>;
    
    public constructor(){
        this.kVMap = new Map<string, Entry>();
    }

    public getKV(key: string): Entry{
        return this.kVMap.get(key)!
    }

    public setKV(key: string, value: Entry): void{
        this.kVMap.set(key, value);
    }

    public getKVMap(): Map<string, Entry>{
        return this.kVMap
    }
}