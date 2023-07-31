import { KVStore } from "../../models/KVStore";

export interface SearchStrategy {
    search(key: string, value: any): string[];
}