/*
  Warnings:

  - You are about to drop the `WatchList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WatchList" DROP CONSTRAINT "WatchList_belongsToId_fkey";

-- DropTable
DROP TABLE "WatchList";

-- CreateTable
CREATE TABLE "Movies" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "likedById" TEXT NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebSeries" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "likedById" TEXT NOT NULL,

    CONSTRAINT "WebSeries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "webSeriesId" TEXT,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "moviesId" TEXT,
    "webSeriesId" TEXT,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_id_likedById_key" ON "Movies"("id", "likedById");

-- CreateIndex
CREATE UNIQUE INDEX "WebSeries_id_likedById_key" ON "WebSeries"("id", "likedById");

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_likedById_fkey" FOREIGN KEY ("likedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebSeries" ADD CONSTRAINT "WebSeries_likedById_fkey" FOREIGN KEY ("likedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_webSeriesId_fkey" FOREIGN KEY ("webSeriesId") REFERENCES "WebSeries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_moviesId_fkey" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_webSeriesId_fkey" FOREIGN KEY ("webSeriesId") REFERENCES "WebSeries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
