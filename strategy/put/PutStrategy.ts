import { Entry } from "../../models/Entry";
import { KVStore } from "../../models/KVStore";

export interface PutStrategy{
    put(key: string, value: Entry): string | void;
}