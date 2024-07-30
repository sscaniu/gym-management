-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "street_1" TEXT NOT NULL,
    "street_2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT NOT NULL,
    "contact_preference" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClientsToGym" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientsToGym_AB_unique" ON "_ClientsToGym"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientsToGym_B_index" ON "_ClientsToGym"("B");

-- AddForeignKey
ALTER TABLE "_ClientsToGym" ADD CONSTRAINT "_ClientsToGym_A_fkey" FOREIGN KEY ("A") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientsToGym" ADD CONSTRAINT "_ClientsToGym_B_fkey" FOREIGN KEY ("B") REFERENCES "gyms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
