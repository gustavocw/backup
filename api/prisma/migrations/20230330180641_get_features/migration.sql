/*
  Warnings:

  - Added the required column `height` to the `DataOfEscort` table without a default value. This is not possible if the table is not empty.
  - Added the required column `obsScheduling` to the `DataOfEscort` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataOfEscort" ADD COLUMN     "height" TEXT NOT NULL,
ADD COLUMN     "obsScheduling" TEXT NOT NULL;
