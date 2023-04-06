import { Injectable } from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {HeroRepo} from "@/domain/knight/Hero.repo";
import { IDeleteKnightSO } from 'commonTypes/dist/domain/knight.dto';

@Injectable()
export class DeleteKnightService extends BaseService<boolean> {
    constructor(
        private knightRepo: KnightRepo,
        private heroRepo: HeroRepo,
    ) {
        super();
    }
    
    async handle(serviceObject: IDeleteKnightSO): Promise<boolean> {
        const knight = await this.knightRepo.get(serviceObject.id)
        
        if (knight.length) {
            await this.heroRepo.save(knight[0]);
            await this.knightRepo.delete(serviceObject.id)
        }
        
        return Promise.resolve(true);
    }
}
