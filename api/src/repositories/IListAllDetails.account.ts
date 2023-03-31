import { Escort } from "@prisma/client";

export abstract class AListAll {
    abstract findAllEscorts(): Promise<Escort[]>;
};
