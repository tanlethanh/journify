/*
  Warnings:

  - A unique constraint covering the columns `[handle]` on the table `Place` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Place_handle_key" ON "Place"("handle");
