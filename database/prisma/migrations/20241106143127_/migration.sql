/*
  Warnings:

  - The `street_name` column on the `Venue` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "contactNumber" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "Venue" DROP COLUMN "street_name",
ADD COLUMN     "street_name" TEXT[];
