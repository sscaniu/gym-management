/*
  Warnings:

  - You are about to drop the column `gymId` on the `sessions` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_gymId_fkey";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "gymId",
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "locationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
