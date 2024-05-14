/*
  Warnings:

  - The primary key for the `GymsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `gyms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `locations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `messages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "GymsOnUsers" DROP CONSTRAINT "GymsOnUsers_gymId_fkey";

-- DropForeignKey
ALTER TABLE "GymsOnUsers" DROP CONSTRAINT "GymsOnUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "locations" DROP CONSTRAINT "locations_gymId_fkey";

-- AlterTable
ALTER TABLE "GymsOnUsers" DROP CONSTRAINT "GymsOnUsers_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "gymId" SET DATA TYPE TEXT,
ADD CONSTRAINT "GymsOnUsers_pkey" PRIMARY KEY ("userId", "gymId");

-- AlterTable
ALTER TABLE "gyms" DROP CONSTRAINT "gyms_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "gyms_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "gyms_id_seq";

-- AlterTable
ALTER TABLE "locations" DROP CONSTRAINT "locations_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "gymId" SET DATA TYPE TEXT,
ADD CONSTRAINT "locations_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "locations_id_seq";

-- AlterTable
ALTER TABLE "messages" DROP CONSTRAINT "messages_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "messages_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "messages_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AddForeignKey
ALTER TABLE "GymsOnUsers" ADD CONSTRAINT "GymsOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GymsOnUsers" ADD CONSTRAINT "GymsOnUsers_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
