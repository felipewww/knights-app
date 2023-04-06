import { EKnightKeyAttributes } from "../presentation/knight.vm";
import { WeaponViewModel } from "../presentation/weapon.vm";
export interface IDeleteKnightSO {
    id: number;
}
export declare type KnightStatus = 'heroes' | 'alive';
export interface IReadKnightSO {
    id?: number;
    type: KnightStatus;
}
export interface KnightDto {
    _id: number;
    name: string;
    age: number;
    weapons: Array<WeaponViewModel>;
    keyAttribute: EKnightKeyAttributes;
    attack: number;
    exp: number;
}
//# sourceMappingURL=knight.dto.d.ts.map