/*
  Warnings:

  - You are about to drop the `GymsOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GymsOnUsers" DROP CONSTRAINT "GymsOnUsers_gymId_fkey";

-- DropForeignKey
ALTER TABLE "GymsOnUsers" DROP CONSTRAINT "GymsOnUsers_userId_fkey";

-- DropTable
DROP TABLE "GymsOnUsers";

-- CreateTable
CREATE TABLE "_GymToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GymToUser_AB_unique" ON "_GymToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GymToUser_B_index" ON "_GymToUser"("B");

-- AddForeignKey
ALTER TABLE "_GymToUser" ADD CONSTRAINT "_GymToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GymToUser" ADD CONSTRAINT "_GymToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
