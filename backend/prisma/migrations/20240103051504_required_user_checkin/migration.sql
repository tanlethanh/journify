/*
  Warnings:

  - Made the column `authorId` on table `CheckIn` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_authorId_fkey";

-- AlterTable
ALTER TABLE "CheckIn" ALTER COLUMN "authorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
