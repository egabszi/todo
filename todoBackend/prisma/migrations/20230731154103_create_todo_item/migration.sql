-- CreateTable
CREATE TABLE "TodoItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "TodoItem_pkey" PRIMARY KEY ("id")
);
