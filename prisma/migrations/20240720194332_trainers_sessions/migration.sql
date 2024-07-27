-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "sender" TEXT;

-- CreateTable
CREATE TABLE "trainers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "street_1" TEXT NOT NULL,
    "street_2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT,
    "specialty" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "trainers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "Description" TEXT,
    "gymId" TEXT NOT NULL,
    "trainerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GymToTrainer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClientToTrainer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "trainers_email_key" ON "trainers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_GymToTrainer_AB_unique" ON "_GymToTrainer"("A", "B");

-- CreateIndex
CREATE INDEX "_GymToTrainer_B_index" ON "_GymToTrainer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToTrainer_AB_unique" ON "_ClientToTrainer"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToTrainer_B_index" ON "_ClientToTrainer"("B");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "trainers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GymToTrainer" ADD CONSTRAINT "_GymToTrainer_A_fkey" FOREIGN KEY ("A") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GymToTrainer" ADD CONSTRAINT "_GymToTrainer_B_fkey" FOREIGN KEY ("B") REFERENCES "trainers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToTrainer" ADD CONSTRAINT "_ClientToTrainer_A_fkey" FOREIGN KEY ("A") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToTrainer" ADD CONSTRAINT "_ClientToTrainer_B_fkey" FOREIGN KEY ("B") REFERENCES "trainers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
