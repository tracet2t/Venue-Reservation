-- CreateTable
CREATE TABLE "VenueDailyReservationCount" (
    "id" SERIAL NOT NULL,
    "venueId" INTEGER NOT NULL,
    "reservationCount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VenueDailyReservationCount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VenueDailyReservationCount_venueId_date_key" ON "VenueDailyReservationCount"("venueId", "date");

-- AddForeignKey
ALTER TABLE "VenueDailyReservationCount" ADD CONSTRAINT "VenueDailyReservationCount_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
