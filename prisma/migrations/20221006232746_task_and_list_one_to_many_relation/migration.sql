/*
  Warnings:

  - You are about to drop the column `Status` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `doneStatus` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listId` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lists" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "Status",
ADD COLUMN     "doneStatus" BOOLEAN NOT NULL,
ADD COLUMN     "listId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_listId_fkey" FOREIGN KEY ("listId") REFERENCES "lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
