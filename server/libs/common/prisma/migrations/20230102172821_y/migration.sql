/*
  Warnings:

  - Added the required column `updatedAt` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WebSeries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movies" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "WebSeries" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
