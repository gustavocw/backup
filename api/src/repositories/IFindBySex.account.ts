import { Escort } from '@prisma/client';
import { IBySexDTO } from '../useCases/findBySex/FindBySex.DTO';

export abstract class ABySex {
    abstract findBySex(data:IBySexDTO): Promise<Escort[]>;
};
