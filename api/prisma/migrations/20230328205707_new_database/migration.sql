/*
  Warnings:

  - Added the required column `imagesForEscortId` to the `Escort` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Escort" ADD COLUMN     "imagesForEscortId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ImagesForEscort" (
    "id" TEXT NOT NULL,
    "urlPhoto" TEXT NOT NULL,
    "escortId" TEXT NOT NULL,

    CONSTRAINT "ImagesForEscort_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImagesForEscort_escortId_key" ON "ImagesForEscort"("escortId");

-- AddForeignKey
ALTER TABLE "ImagesForEscort" ADD CONSTRAINT "ImagesForEscort_escortId_fkey" FOREIGN KEY ("escortId") REFERENCES "Escort"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
