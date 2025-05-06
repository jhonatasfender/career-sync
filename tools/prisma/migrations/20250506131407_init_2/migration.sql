/*
  Warnings:

  - You are about to drop the column `image` on the `Basics` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `Reference` table. All the data in the column will be lost.
  - You are about to drop the column `highlights` on the `Volunteer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Basics" DROP COLUMN "image",
ADD COLUMN     "picture" JSONB;

-- AlterTable
ALTER TABLE "Reference" DROP COLUMN "reference",
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "highlights",
ADD COLUMN     "location" TEXT,
ADD COLUMN     "url" TEXT;
