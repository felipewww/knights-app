import { KnightDto } from "commonTypes/src/domain/knight.dto";
import { WeaponViewModel } from "commonTypes/src/presentation/weapon.vm";

export class KnightEntity implements KnightDto {
    
    public deleted = false;
    
    constructor(
        public _id: any,
        public name: string,
        public age: number,
        public weapons: Array<WeaponViewModel>,
        // public weapons: Array<any>,
        public keyAttribute: any,
        public attack: number,
        public exp: number
    ) {
    
    }
}