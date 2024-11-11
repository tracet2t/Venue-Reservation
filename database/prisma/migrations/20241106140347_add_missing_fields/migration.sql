/*
  Warnings:

  - You are about to drop the column `street` on the `Venue` table. All the data in the column will be lost.
  - Added the required column `street_name` to the `Venue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Venue" DROP COLUMN "street",
ADD COLUMN     "street_name" TEXT NOT NULL;
