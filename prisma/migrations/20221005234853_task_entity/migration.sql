-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "Status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
