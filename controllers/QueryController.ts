import { CommandTypeFactory } from "../factory/CommandTypeFactory";
import { DeleteService } from "../services/DeleteService";
import { PutService } from "../services/PutService";
import { SearchService } from "../services/SearchService";

export class QueryController {

    private searchService: SearchService;
    private putService: PutService;
    private deleteService: DeleteService;

    public constructor(searchService:SearchService, putService: PutService, deleteService: DeleteService ){
        this.searchService = searchService;
        this.putService = putService;
        this.deleteService = deleteService;
    }

    public query(fullCommand: string) : string | Error{
        let commands = fullCommand.split(' ');
        let commandType = commands.shift();
        try {
            let response: string | Error = '';
            if(commandType === 'search'){
                response = this.searchService.search(commands);
            }
    
            if(commandType === 'put'){
                this.putService.put(commands);
            }
    
            if(commandType === 'delete'){
                this.deleteService.delete(commands);
            }
    
            return response;
        } catch (error: any) {
            return error;
        }
    }
}