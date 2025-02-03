-- CreateTable
CREATE TABLE "link" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_used" BOOLEAN NOT NULL DEFAULT false,
    "message" TEXT NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);
