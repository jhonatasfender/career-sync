/*
  Warnings:

  - You are about to drop the column `releaseDate` on the `Publication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Publication" DROP COLUMN "releaseDate",
ADD COLUMN     "date" TIMESTAMP(3);
