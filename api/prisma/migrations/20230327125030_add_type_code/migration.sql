/*
  Warnings:

  - The `code` column on the `Client` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `code` column on the `Escort` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "code",
ADD COLUMN     "code" INTEGER;

-- AlterTable
ALTER TABLE "Escort" DROP COLUMN "code",
ADD COLUMN     "code" INTEGER;
