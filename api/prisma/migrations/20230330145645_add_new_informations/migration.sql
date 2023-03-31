/*
  Warnings:

  - You are about to drop the column `dummy` on the `DataOfEscort` table. All the data in the column will be lost.
  - You are about to drop the column `feet` on the `DataOfEscort` table. All the data in the column will be lost.
  - Added the required column `piercing` to the `DataOfEscort` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tatoo` to the `DataOfEscort` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Escort` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataOfEscort" DROP COLUMN "dummy",
DROP COLUMN "feet",
ADD COLUMN     "piercing" INTEGER NOT NULL,
ADD COLUMN     "tatoo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Escort" ADD COLUMN     "city" TEXT NOT NULL;
