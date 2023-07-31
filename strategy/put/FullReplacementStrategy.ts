import { Entry } from "../../models/Entry";
import { KVStore } from "../../models/KVStore";
import { AttributeRepository } from "../../repository/AttributeRepository";
import { PutStrategy } from "./PutStrategy";

export class FullReplacementStrategy implements PutStrategy {
    private store: KVStore;
    private attributeRepository: AttributeRepository;

    public constructor(store: KVStore, attributeRepository: AttributeRepository){
        this.store = store;
        this.attributeRepository = attributeRepository;
    }
    put(key: string, value: Entry): string | void {
        let kvStore = this.store.getKVMap();
        let attributes = value.getAttributes();
        for(let attribute of attributes){
            let attributeType = attribute.getValueType();
            let persistedAttributeType = this.attributeRepository.getAttributeMetadata(attribute.getKey());
            if(!persistedAttributeType){
                this.attributeRepository.setAttributeMetadata(attribute.getKey(), attributeType);
                break;
            }

            if(attributeType !== persistedAttributeType){
                throw new Error("Data Type Error")
            }
        }
        kvStore.set(key, value);
        
    }

}