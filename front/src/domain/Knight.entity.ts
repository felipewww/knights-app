// import {EKnightKeyAttributes, KnightDto, WeaponViewModel} from "commonTypes";

// export class KnightEntity implements KnightDto {
export class KnightEntity {
    constructor(
        public _id: any,
        public name: string,
        public age: number,
        // public weapons: Array<WeaponViewModel>,
        public weapons: Array<any>,
        public keyAttribute: any,
        public attack: number,
        public exp: number
    ) {
    
    }
}