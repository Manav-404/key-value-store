import { KVStore } from "../../models/KVStore";
import { SearchStrategy } from "./SearchStrategy";

export class SearchKeyValueStrategy implements SearchStrategy{
    private store: KVStore;

    public constructor(store: KVStore){
        this.store = store;
    }
    search(key: string, value: any): string[] {
        let keys = [];

        let kvStore = this.store.getKVMap();
        for(let [storeKey, entry] of kvStore.entries()){
                let attributes = entry.getAttributes();
                for(let attribute of attributes){
                    let attributeValue = attribute.getValue();
                    let attributeKey = attribute.getKey();
                    if(attributeKey === key && attributeValue === value){
                        keys.push(storeKey);
                    }    
            }
        }
        if(keys.length === 0){
            throw new Error(`${key}:${value} not found`)
        }

        return keys;
    }

}