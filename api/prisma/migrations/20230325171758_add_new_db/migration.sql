-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "escort" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Escort" ADD COLUMN     "escort" BOOLEAN NOT NULL DEFAULT true;
