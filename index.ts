import * as readLine from 'readline';
import { QueryController } from "./controllers/QueryController";
import { KVStore } from "./models/KVStore";
import { AttributeRepository } from "./repository/AttributeRepository";
import { DeleteService } from "./services/DeleteService";
import { PutService } from "./services/PutService";
import { SearchService } from "./services/SearchService";
import { DeleteFullKeyStrategy } from "./strategy/delete/DeleteFullKeyStrategy";
import { FullReplacementStrategy } from "./strategy/put/FullReplacementStrategy";
import { SearchKeyValueStrategy } from "./strategy/search/SearchKeyValueStrategy";
import { SearchKeyCommaSeperatedTransformer } from "./strategy/search/transformers/SearchKeyCommaSeperatedTransformer";


let kvStore = new KVStore();
let attributeRepository = new AttributeRepository();
let searchStrategy = new SearchKeyValueStrategy(kvStore);
let searchTransformStrategy = new SearchKeyCommaSeperatedTransformer();
let putStrategy = new FullReplacementStrategy(kvStore, attributeRepository);
let deleteStrategy = new DeleteFullKeyStrategy(kvStore);
let searchService = new SearchService(searchStrategy, searchTransformStrategy);
let putService = new PutService(putStrategy);
let deleteService = new DeleteService(deleteStrategy);

let controller = new QueryController(searchService, putService, deleteService);


// Command Line Input from user
let rl = readLine.createInterface(process.stdin, process.stdout);
rl.prompt();

let commands: string[]= []
function processCommands(commands: string[]){
    for(let command of commands){
       try {
         let response = controller.query(command);
         if(response!==''){
            console.log(response);
         }
       } catch (error) {
        console.log(error)
       }
    }

    process.exit(0)

}
rl.on('line', function(line){
    if(line === 'exit'){
        rl.close();
    }
    commands.push(line)  
    rl.prompt()
}).on('close', function(){
    processCommands(commands)
})
