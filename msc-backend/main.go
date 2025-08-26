package main

import (
    "encoding/json"
    "net/http"
    "github.com/gorilla/mux"
    _ "github.com/mattn/go-sqlite3"
)

var db = InitDB()

func getCourses(w http.ResponseWriter, r *http.Request) {
    rows, _ := db.Query("SELECT id, title, description, category FROM courses")
    var courses []Course
    for rows.Next() {
        var c Course
        rows.Scan(&c.ID, &c.Title, &c.Description, &c.Category)
        courses = append(courses, c)
    }
    json.NewEncoder(w).Encode(courses)
}

func getMentors(w http.ResponseWriter, r *http.Request) {
    rows, _ := db.Query("SELECT id, name, title, company, avatarUrl FROM mentors")
    var mentors []Mentor
    for rows.Next() {
        var m Mentor
        rows.Scan(&m.ID, &m.Name, &m.Title, &m.Company, &m.AvatarUrl)
        mentors = append(mentors, m)
    }
    json.NewEncoder(w).Encode(mentors)
}

func getProjects(w http.ResponseWriter, r *http.Request) {
    rows, _ := db.Query("SELECT id, title, description, imageUrl FROM projects")
    var projects []Project
    for rows.Next() {
        var p Project
        rows.Scan(&p.ID, &p.Title, &p.Description, &p.ImageUrl)
        projects = append(projects, p)
    }
    json.NewEncoder(w).Encode(projects)
}

func seedData() {
    // Seed only if tables are empty
    var count int
    db.QueryRow("SELECT COUNT(*) FROM courses").Scan(&count)
    if count == 0 {
        db.Exec(`INSERT INTO courses (title, description, category) VALUES
            ('Mentoring 101', 'Khóa mentoring cơ bản', 'Mentoring'),
            ('In-house Training', 'Đào tạo doanh nghiệp', 'In-house')
        `)
    }
    db.QueryRow("SELECT COUNT(*) FROM mentors").Scan(&count)
    if count == 0 {
        db.Exec(`INSERT INTO mentors (name, title, company, avatarUrl) VALUES
            ('Nguyễn Văn A', 'Tiến Sĩ Kinh tế', 'MSC', 'https://i.pravatar.cc/150?img=1'),
            ('Trần Thị B', 'Chuyên gia đào tạo', 'MSC', 'https://i.pravatar.cc/150?img=2')
        `)
    }
    db.QueryRow("SELECT COUNT(*) FROM projects").Scan(&count)
    if count == 0 {
        db.Exec(`INSERT INTO projects (title, description, imageUrl) VALUES
            ('Dự án Mentoring', 'Dự án mentoring cho doanh nghiệp', 'https://via.placeholder.com/300'),
            ('Dự án Coaching', 'Dự án coaching cho cá nhân', 'https://via.placeholder.com/300')
        `)
    }
}

func main() {
    seedData()
    r := mux.NewRouter()
    r.HandleFunc("/courses", getCourses).Methods("GET")
    r.HandleFunc("/mentors", getMentors).Methods("GET")
    r.HandleFunc("/projects", getProjects).Methods("GET")
    http.ListenAndServe(":8080", r)
}