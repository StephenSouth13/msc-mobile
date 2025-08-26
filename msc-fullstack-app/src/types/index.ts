export type Course = {
  id: number;
  thumbnail: string;
  category: string;
  title: string;
  description: string;
  mentorAvatars: string[];
};

export interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
}

export interface Mentor {
    id: string;
    avatar: string;
    fullName: string;
    title: string;
    company: string;
}