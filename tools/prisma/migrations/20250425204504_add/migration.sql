/*
  Warnings:

  - You are about to drop the column `highlights` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "highlights",
DROP COLUMN "url",
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "website" TEXT;
