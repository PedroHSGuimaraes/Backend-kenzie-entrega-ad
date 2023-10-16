CREATE TABLE IF NOT EXISTS "users" (
    "id" serial PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL UNIQUE,
    "password" VARCHAR(120) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS "courses" (
    "id" serial PRIMARY KEY,
    "name" VARCHAR(15) NOT NULL,
    "description" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "userCourses" (
    "id" serial PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT TRUE,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE,
    FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE
);