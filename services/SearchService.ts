import { SearchStrategy } from "../strategy/search/SearchStrategy";
import { SearchKeyTransformer } from "../strategy/search/transformers/SearchKeyTransformerStrategy";

export class SearchService{
    private searchStrategy : SearchStrategy;
    private searchTransformStrategy: SearchKeyTransformer ;
    public constructor(searchStrategy: SearchStrategy,searchTransformStrategy: SearchKeyTransformer ){
        this.searchStrategy = searchStrategy;
        this.searchTransformStrategy = searchTransformStrategy;
    }

    public search(commands: string[]) : string{
        let key = commands[0];
        let value = commands[1];
        try {
            let keys = this.searchStrategy.search(key, value);
            let transformedValue = this.searchTransformStrategy.transformSearch(keys);
            return transformedValue
        } catch (error: any) {
            throw new Error(error);
        }

    }
}