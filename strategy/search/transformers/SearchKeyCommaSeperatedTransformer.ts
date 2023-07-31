import { SearchKeyTransformer } from "./SearchKeyTransformerStrategy";

export class SearchKeyCommaSeperatedTransformer implements SearchKeyTransformer{
    transformSearch(keys: string[]): string {
        return keys.join(',');
    }
    
}