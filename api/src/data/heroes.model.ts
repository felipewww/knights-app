import {BaseModel} from "@/data/base-model";
import { KnightModel } from "commonTypes";

export class HeroSource extends BaseModel<KnightModel> {
    collectionName = 'heroes'
}
