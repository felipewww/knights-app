import {Attributes, EKnightKeyAttributes, KnightDto, WeaponViewModel} from "commonTypes";

export class KnightEntity implements KnightDto {
    constructor(
        public _id: any,
        public name: string,
        public age: number,
        public weapons: Array<WeaponViewModel>,
        public keyAttribute: EKnightKeyAttributes,
        public attack: number,
        public exp: number
    ) {
    
    }
}