package main

import (
    "database/sql"
    "log"
)

func InitDB() *sql.DB {
    db, err := sql.Open("sqlite3", "./msc.db")
    if err != nil {
        log.Fatal(err)
    }

    // Courses
    db.Exec(`CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        category TEXT
    )`)

    // Mentors
    db.Exec(`CREATE TABLE IF NOT EXISTS mentors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        title TEXT,
        company TEXT,
        avatarUrl TEXT
    )`)

    // Projects
    db.Exec(`CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        imageUrl TEXT
    )`)

    return db
}