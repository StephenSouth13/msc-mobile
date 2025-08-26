package main

type Course struct {
    ID          int    `json:"id"`
    Title       string `json:"title"`
    Description string `json:"description"`
    Category    string `json:"category"`
}

type Mentor struct {
    ID        int    `json:"id"`
    Name      string `json:"name"`
    Title     string `json:"title"`
    Company   string `json:"company"`
    AvatarUrl string `json:"avatarUrl"`
}

type Project struct {
    ID          int    `json:"id"`
    Title       string `json:"title"`
    Description string `json:"description"`
    ImageUrl    string `json:"imageUrl"`
}