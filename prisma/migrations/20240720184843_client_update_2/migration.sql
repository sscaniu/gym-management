/*
  Warnings:

  - You are about to drop the `_ClientsToGym` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClientsToGym" DROP CONSTRAINT "_ClientsToGym_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClientsToGym" DROP CONSTRAINT "_ClientsToGym_B_fkey";

-- DropTable
DROP TABLE "_ClientsToGym";

-- CreateTable
CREATE TABLE "_ClientToGym" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToGym_AB_unique" ON "_ClientToGym"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToGym_B_index" ON "_ClientToGym"("B");

-- AddForeignKey
ALTER TABLE "_ClientToGym" ADD CONSTRAINT "_ClientToGym_A_fkey" FOREIGN KEY ("A") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToGym" ADD CONSTRAINT "_ClientToGym_B_fkey" FOREIGN KEY ("B") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
