/*
  Warnings:

  - You are about to drop the column `urlPhoto` on the `Client` table. All the data in the column will be lost.
  - Added the required column `sexo` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "urlPhoto",
ADD COLUMN     "acompanhante" BOOLEAN DEFAULT false,
ADD COLUMN     "sexo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DataOfAcompanhante" (
    "id" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "eyes" TEXT NOT NULL,
    "waist" TEXT NOT NULL,
    "dummy" INTEGER NOT NULL,
    "feet" INTEGER NOT NULL,
    "weight" TEXT NOT NULL,
    "hip" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "DataOfAcompanhante_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DataOfAcompanhante_contact_key" ON "DataOfAcompanhante"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "DataOfAcompanhante_clientId_key" ON "DataOfAcompanhante"("clientId");

-- AddForeignKey
ALTER TABLE "DataOfAcompanhante" ADD CONSTRAINT "DataOfAcompanhante_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
