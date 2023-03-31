/*
  Warnings:

  - You are about to drop the column `acompanhante` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the `DataOfAcompanhante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DataOfAcompanhante" DROP CONSTRAINT "DataOfAcompanhante_clientId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "acompanhante";

-- DropTable
DROP TABLE "DataOfAcompanhante";

-- CreateTable
CREATE TABLE "Escort" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Escort_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataOfEscort" (
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

    CONSTRAINT "DataOfEscort_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Escort_email_key" ON "Escort"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DataOfEscort_contact_key" ON "DataOfEscort"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "DataOfEscort_clientId_key" ON "DataOfEscort"("clientId");

-- AddForeignKey
ALTER TABLE "DataOfEscort" ADD CONSTRAINT "DataOfEscort_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Escort"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
