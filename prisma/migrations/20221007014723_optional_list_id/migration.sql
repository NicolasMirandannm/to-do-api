-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_listId_fkey";

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "listId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_listId_fkey" FOREIGN KEY ("listId") REFERENCES "lists"("id") ON DELETE SET NULL ON UPDATE CASCADE;
