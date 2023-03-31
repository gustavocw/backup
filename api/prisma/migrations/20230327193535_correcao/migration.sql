/*
  Warnings:

  - The `codeDate` column on the `Client` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `codeDate` column on the `Escort` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "codeDate",
ADD COLUMN     "codeDate" INTEGER;

-- AlterTable
ALTER TABLE "Escort" DROP COLUMN "codeDate",
ADD COLUMN     "codeDate" INTEGER;
