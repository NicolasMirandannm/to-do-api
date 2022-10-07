/*
  Warnings:

  - A unique constraint covering the columns `[task]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tasks_task_key" ON "tasks"("task");
