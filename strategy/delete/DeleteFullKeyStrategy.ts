import { KVStore } from "../../models/KVStore";
import { DeleteStrategy } from "./DeleteStrategy";

export class DeleteFullKeyStrategy implements DeleteStrategy {
    private store: KVStore;
    public constructor(store: KVStore){
        this.store = store;
    }
    delete(key: string): void {
        let kvStore = this.store.getKVMap();
        if(!kvStore.has(key)){
            throw new Error(`${key} not found`);
        }
        kvStore.delete(key);
        return;
    }

}