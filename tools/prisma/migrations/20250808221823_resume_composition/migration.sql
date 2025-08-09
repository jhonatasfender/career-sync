-- CreateTable
CREATE TABLE "ResumeExperience" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "experienceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeEducation" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "educationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeSkill" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeLanguage" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "languageId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeAward" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "awardId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeAward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeCertification" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "certificationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeCertification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeInterest" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "interestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeInterest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeProject" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumePublication" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "publicationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumePublication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeVolunteer" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "volunteerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeVolunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeReference" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "referenceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeReference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeCustomSection" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "customSectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeCustomSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeProfile" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ResumeExperience_experienceId_idx" ON "ResumeExperience"("experienceId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeExperience_resumeId_experienceId_key" ON "ResumeExperience"("resumeId", "experienceId");

-- CreateIndex
CREATE INDEX "ResumeEducation_educationId_idx" ON "ResumeEducation"("educationId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeEducation_resumeId_educationId_key" ON "ResumeEducation"("resumeId", "educationId");

-- CreateIndex
CREATE INDEX "ResumeSkill_skillId_idx" ON "ResumeSkill"("skillId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeSkill_resumeId_skillId_key" ON "ResumeSkill"("resumeId", "skillId");

-- CreateIndex
CREATE INDEX "ResumeLanguage_languageId_idx" ON "ResumeLanguage"("languageId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeLanguage_resumeId_languageId_key" ON "ResumeLanguage"("resumeId", "languageId");

-- CreateIndex
CREATE INDEX "ResumeAward_awardId_idx" ON "ResumeAward"("awardId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeAward_resumeId_awardId_key" ON "ResumeAward"("resumeId", "awardId");

-- CreateIndex
CREATE INDEX "ResumeCertification_certificationId_idx" ON "ResumeCertification"("certificationId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeCertification_resumeId_certificationId_key" ON "ResumeCertification"("resumeId", "certificationId");

-- CreateIndex
CREATE INDEX "ResumeInterest_interestId_idx" ON "ResumeInterest"("interestId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeInterest_resumeId_interestId_key" ON "ResumeInterest"("resumeId", "interestId");

-- CreateIndex
CREATE INDEX "ResumeProject_projectId_idx" ON "ResumeProject"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeProject_resumeId_projectId_key" ON "ResumeProject"("resumeId", "projectId");

-- CreateIndex
CREATE INDEX "ResumePublication_publicationId_idx" ON "ResumePublication"("publicationId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumePublication_resumeId_publicationId_key" ON "ResumePublication"("resumeId", "publicationId");

-- CreateIndex
CREATE INDEX "ResumeVolunteer_volunteerId_idx" ON "ResumeVolunteer"("volunteerId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeVolunteer_resumeId_volunteerId_key" ON "ResumeVolunteer"("resumeId", "volunteerId");

-- CreateIndex
CREATE INDEX "ResumeReference_referenceId_idx" ON "ResumeReference"("referenceId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeReference_resumeId_referenceId_key" ON "ResumeReference"("resumeId", "referenceId");

-- CreateIndex
CREATE INDEX "ResumeCustomSection_customSectionId_idx" ON "ResumeCustomSection"("customSectionId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeCustomSection_resumeId_customSectionId_key" ON "ResumeCustomSection"("resumeId", "customSectionId");

-- CreateIndex
CREATE INDEX "ResumeProfile_profileId_idx" ON "ResumeProfile"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeProfile_resumeId_profileId_key" ON "ResumeProfile"("resumeId", "profileId");

-- AddForeignKey
ALTER TABLE "ResumeExperience" ADD CONSTRAINT "ResumeExperience_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeExperience" ADD CONSTRAINT "ResumeExperience_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeEducation" ADD CONSTRAINT "ResumeEducation_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeEducation" ADD CONSTRAINT "ResumeEducation_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeSkill" ADD CONSTRAINT "ResumeSkill_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeSkill" ADD CONSTRAINT "ResumeSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeLanguage" ADD CONSTRAINT "ResumeLanguage_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeLanguage" ADD CONSTRAINT "ResumeLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeAward" ADD CONSTRAINT "ResumeAward_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeAward" ADD CONSTRAINT "ResumeAward_awardId_fkey" FOREIGN KEY ("awardId") REFERENCES "Award"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeCertification" ADD CONSTRAINT "ResumeCertification_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeCertification" ADD CONSTRAINT "ResumeCertification_certificationId_fkey" FOREIGN KEY ("certificationId") REFERENCES "Certification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeInterest" ADD CONSTRAINT "ResumeInterest_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeInterest" ADD CONSTRAINT "ResumeInterest_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "Interest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeProject" ADD CONSTRAINT "ResumeProject_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeProject" ADD CONSTRAINT "ResumeProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumePublication" ADD CONSTRAINT "ResumePublication_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumePublication" ADD CONSTRAINT "ResumePublication_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeVolunteer" ADD CONSTRAINT "ResumeVolunteer_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeVolunteer" ADD CONSTRAINT "ResumeVolunteer_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeReference" ADD CONSTRAINT "ResumeReference_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeReference" ADD CONSTRAINT "ResumeReference_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "Reference"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeCustomSection" ADD CONSTRAINT "ResumeCustomSection_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeCustomSection" ADD CONSTRAINT "ResumeCustomSection_customSectionId_fkey" FOREIGN KEY ("customSectionId") REFERENCES "CustomSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeProfile" ADD CONSTRAINT "ResumeProfile_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeProfile" ADD CONSTRAINT "ResumeProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
