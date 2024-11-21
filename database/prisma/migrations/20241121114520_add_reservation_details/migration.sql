/*
  Warnings:

  - Added the required column `timeMode` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `venueType` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "amenities" TEXT[],
ADD COLUMN     "timeMode" "Schedule" NOT NULL,
ADD COLUMN     "venueType" TEXT NOT NULL;
