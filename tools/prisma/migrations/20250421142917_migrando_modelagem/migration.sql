/*
  Warnings:

  - You are about to drop the column `highlights` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "highlights",
DROP COLUMN "location";
