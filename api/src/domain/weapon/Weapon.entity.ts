import {IWeaponAttributes, WeaponModel } from "commonTypes";

export class WeaponEntity implements WeaponModel {
    constructor(
        public name: string,
        public mod: number,
        public attr: IWeaponAttributes,
        public equipped: boolean = false
    ) {
    }
}