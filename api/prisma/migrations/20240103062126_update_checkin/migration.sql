/*
  Warnings:

  - Added the required column `downvote` to the `CheckIn` table without a default value. This is not possible if the table is not empty.
  - Added the required column `impressions` to the `CheckIn` table without a default value. This is not possible if the table is not empty.
  - Added the required column `upvote` to the `CheckIn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CheckIn" ADD COLUMN     "downvote" INTEGER NOT NULL,
ADD COLUMN     "impressions" INTEGER NOT NULL,
ADD COLUMN     "upvote" INTEGER NOT NULL;
