import { DeleteStrategy } from "../strategy/delete/DeleteStrategy";

export class DeleteService {
    private deleteStrategy : DeleteStrategy
    public constructor(deleteStrategy : DeleteStrategy){
        this.deleteStrategy = deleteStrategy;
    }

    public delete(commands: string[]){
        let keyToDelete = commands[0];
        this.deleteStrategy.delete(keyToDelete);
    }
}