import {Attributes, EKnightKeyAttributes, KnightViewModel} from "commonTypes/src/presentation/knight.vm";
import { WeaponViewModel } from "commonTypes/src/presentation/weapon.vm";

export class KnightVMEntity implements KnightViewModel{
    constructor(
        public name: string,
        public nickname: string,
        public birthday: string,
        public weapons: Array<WeaponViewModel>,
        public attributes: Attributes,
        public keyAttribute: EKnightKeyAttributes
    ) {
    
    }
    
    public static blank() {
        return new KnightVMEntity(
            null,
            null,
            "1988-09-24",
            [],
            {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            null
        )
    }
}