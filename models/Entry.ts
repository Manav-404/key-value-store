import { Attribute } from "./Attribute";

export class Entry {
    private attribute!: Attribute[]
    public constructor(attributes: Attribute[]){
        this.attribute = attributes;
    }
    public getAttributes(): Attribute[] {
        return this.attribute!;
    }

    public setAttribute(attributes: Attribute[]): void {
        this.attribute! = attributes;
    }
}