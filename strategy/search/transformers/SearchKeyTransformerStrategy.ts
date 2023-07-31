export interface SearchKeyTransformer {
    transformSearch(keys: string[]) : string;
}