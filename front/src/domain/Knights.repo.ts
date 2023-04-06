import type {BaseService} from "@/data/BaseService";
import {KnightsService} from "@/data/Knights.service";
import {KnightDto} from "commonTypes/src/domain/knight.dto";
import {KnightEntity} from "@/domain/Knight.entity";
import {KnightVMEntity} from "@/domain/KnightVM.entity";

export type FilterType = "alive"|"heroes"

export class KnightsRepo {
    private service: BaseService;
    
    constructor() {
        this.service = new KnightsService()
    }
    
    async getById(id: number, type: FilterType = "alive") {
        const dtoArr = await this.service.get<KnightDto>(this.applyFilterQueryParams(type), id);
        
        if (dtoArr.data.length) {
            return this.toEntity(dtoArr.data[0])
        }
        
        return false;
    }
    
    async all(type: FilterType = "alive") {
        const dtoArr = await  this.service.get<KnightDto>(this.applyFilterQueryParams(type));
        const entities: Array<KnightEntity> = []
        
        for (let row of dtoArr.data) {
            entities.push(this.toEntity(row))
        }
        
        return entities;
    }
    
    private applyFilterQueryParams(type: FilterType) {
        const queryParams: { filter?: "heroes" } = {}
        if (type == "heroes") {
            queryParams.filter = "heroes"
        }
        
        return queryParams;
    }
    
    public async update(knight: KnightEntity) {
        return this.service.put(knight._id, {nickname: knight.name})
    }
    
    public async delete(knight: KnightEntity) {
        knight.deleted = true;
        return this.service.delete(knight._id)
    }
    
    public create(knightVM: KnightVMEntity) {
        return this.service.post(knightVM)
    }
    
    private toEntity(dto: KnightDto) {
        return new KnightEntity(
            dto._id,
            dto.name,
            dto.age,
            dto.weapons,
            dto.keyAttribute,
            dto.attack,
            dto.exp
        )
    }
}