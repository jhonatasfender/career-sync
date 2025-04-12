/*
  Warnings:

  - You are about to drop the column `resumeId` on the `Award` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Basics` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Certification` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `CustomSection` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Interest` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Publication` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Reference` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Summary` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Volunteer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Basics` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Summary` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Basics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Certification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `CustomSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Interest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Publication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Reference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Summary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Volunteer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Award" DROP CONSTRAINT "Award_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Basics" DROP CONSTRAINT "Basics_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Certification" DROP CONSTRAINT "Certification_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "CustomSection" DROP CONSTRAINT "CustomSection_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Interest" DROP CONSTRAINT "Interest_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Publication" DROP CONSTRAINT "Publication_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Summary" DROP CONSTRAINT "Summary_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_resumeId_fkey";

-- DropIndex
DROP INDEX "Basics_resumeId_key";

-- DropIndex
DROP INDEX "Summary_resumeId_key";

-- AlterTable
ALTER TABLE "Award" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Basics" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Certification" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CustomSection" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Interest" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Publication" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reference" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Summary" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "resumeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Basics_userId_key" ON "Basics"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Summary_userId_key" ON "Summary"("userId");

-- AddForeignKey
ALTER TABLE "Basics" ADD CONSTRAINT "Basics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Summary" ADD CONSTRAINT "Summary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interest" ADD CONSTRAINT "Interest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomSection" ADD CONSTRAINT "CustomSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
