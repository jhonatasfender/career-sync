/*
  Warnings:

  - The `level` column on the `Language` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Award" ADD COLUMN     "website" TEXT;

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "level",
ADD COLUMN     "level" INTEGER;
