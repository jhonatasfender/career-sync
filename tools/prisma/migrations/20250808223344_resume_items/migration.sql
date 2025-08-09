/*
  Warnings:

  - You are about to drop the `ResumeAward` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeCertification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeCustomSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeEducation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeExperience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeInterest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeLanguage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumePublication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeReference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResumeVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ResumeEntityType" AS ENUM ('EXPERIENCE', 'EDUCATION', 'SKILL', 'LANGUAGE', 'AWARD', 'CERTIFICATION', 'INTEREST', 'PROJECT', 'PUBLICATION', 'VOLUNTEER', 'REFERENCE', 'CUSTOM_SECTION', 'PROFILE', 'BASICS', 'SUMMARY');

-- DropForeignKey
ALTER TABLE "ResumeAward" DROP CONSTRAINT "ResumeAward_awardId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeAward" DROP CONSTRAINT "ResumeAward_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeCertification" DROP CONSTRAINT "ResumeCertification_certificationId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeCertification" DROP CONSTRAINT "ResumeCertification_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeCustomSection" DROP CONSTRAINT "ResumeCustomSection_customSectionId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeCustomSection" DROP CONSTRAINT "ResumeCustomSection_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeEducation" DROP CONSTRAINT "ResumeEducation_educationId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeEducation" DROP CONSTRAINT "ResumeEducation_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeExperience" DROP CONSTRAINT "ResumeExperience_experienceId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeExperience" DROP CONSTRAINT "ResumeExperience_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeInterest" DROP CONSTRAINT "ResumeInterest_interestId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeInterest" DROP CONSTRAINT "ResumeInterest_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeLanguage" DROP CONSTRAINT "ResumeLanguage_languageId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeLanguage" DROP CONSTRAINT "ResumeLanguage_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeProfile" DROP CONSTRAINT "ResumeProfile_profileId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeProfile" DROP CONSTRAINT "ResumeProfile_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeProject" DROP CONSTRAINT "ResumeProject_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeProject" DROP CONSTRAINT "ResumeProject_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumePublication" DROP CONSTRAINT "ResumePublication_publicationId_fkey";

-- DropForeignKey
ALTER TABLE "ResumePublication" DROP CONSTRAINT "ResumePublication_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeReference" DROP CONSTRAINT "ResumeReference_referenceId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeReference" DROP CONSTRAINT "ResumeReference_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeSkill" DROP CONSTRAINT "ResumeSkill_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeSkill" DROP CONSTRAINT "ResumeSkill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeVolunteer" DROP CONSTRAINT "ResumeVolunteer_resumeId_fkey";

-- DropForeignKey
ALTER TABLE "ResumeVolunteer" DROP CONSTRAINT "ResumeVolunteer_volunteerId_fkey";

-- DropTable
DROP TABLE "ResumeAward";

-- DropTable
DROP TABLE "ResumeCertification";

-- DropTable
DROP TABLE "ResumeCustomSection";

-- DropTable
DROP TABLE "ResumeEducation";

-- DropTable
DROP TABLE "ResumeExperience";

-- DropTable
DROP TABLE "ResumeInterest";

-- DropTable
DROP TABLE "ResumeLanguage";

-- DropTable
DROP TABLE "ResumeProfile";

-- DropTable
DROP TABLE "ResumeProject";

-- DropTable
DROP TABLE "ResumePublication";

-- DropTable
DROP TABLE "ResumeReference";

-- DropTable
DROP TABLE "ResumeSkill";

-- DropTable
DROP TABLE "ResumeVolunteer";

-- CreateTable
CREATE TABLE "ResumeItem" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "entityType" "ResumeEntityType" NOT NULL,
    "entityId" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ResumeItem_resumeId_idx" ON "ResumeItem"("resumeId");

-- CreateIndex
CREATE INDEX "ResumeItem_entityType_entityId_idx" ON "ResumeItem"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeItem_resumeId_entityType_entityId_key" ON "ResumeItem"("resumeId", "entityType", "entityId");

-- AddForeignKey
ALTER TABLE "ResumeItem" ADD CONSTRAINT "ResumeItem_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
