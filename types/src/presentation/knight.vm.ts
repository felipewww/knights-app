import {WeaponModel} from "../data/weapon";

export enum EKnightKeyAttributes {
    Strength = 'strength',
    Dexterity = "dexterity",
    Constitution = "constitution",
    Intelligence = "intelligence",
    Wisdom = "wisdom",
    Charisma = "charisma",
}

export type Attributes = {
    [key in EKnightKeyAttributes]: number
}

export interface KnightViewModel {
    _id?: any
    name: string
    nickname: string
    birthday: string
    weapons: Array<WeaponModel>
    attributes: Attributes
    keyAttribute: EKnightKeyAttributes
}