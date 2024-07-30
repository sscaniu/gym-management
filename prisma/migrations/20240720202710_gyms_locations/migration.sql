/*
  Warnings:

  - You are about to drop the column `specialty` on the `gyms` table. All the data in the column will be lost.
  - Added the required column `name` to the `locations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gyms" DROP COLUMN "specialty";

-- AlterTable
ALTER TABLE "locations" ADD COLUMN     "name" TEXT NOT NULL;
