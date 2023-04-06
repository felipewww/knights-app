export enum IWeaponAttributes {
    Strength= 'strength',
    Distance= 'distance',
}

export interface WeaponViewModel {
    name: string,
    mod: number,
    attr: IWeaponAttributes,
    equipped: boolean
}