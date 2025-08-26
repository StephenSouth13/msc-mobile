import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import ProjectCard from '../components/ProjectCard';
import MentorCard from '../components/MentorCard';

const HomeScreen: React.FC = () => {
    return (
        <ScrollView>
            <Header title="Welcome to MSC Fullstack" />
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>Featured Courses</Text>
                {/* Example CourseCard usage */}
                <CourseCard 
                    thumbnail="course-thumbnail-url"
                    category="Web Development"
                    title="Learn React Native"
                    description="Build mobile apps using React Native."
                    mentorAvatars={["mentor1-url", "mentor2-url"]}
                />
                {/* Add more CourseCards as needed */}
            </View>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>Featured Projects</Text>
                {/* Example ProjectCard usage */}
                <ProjectCard 
                    title="Project A"
                    description="Description of Project A."
                    images={["project-image-url"]}
                />
                {/* Add more ProjectCards as needed */}
            </View>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>Our Mentors</Text>
                {/* Example MentorCard usage */}
                <MentorCard 
                    avatar="mentor-avatar-url"
                    fullName="John Doe"
                    title="Senior Developer"
                    company="Tech Company"
                />
                {/* Add more MentorCards as needed */}
            </View>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>Testimonials</Text>
                {/* Add testimonials or partner logos here */}
            </View>
        </ScrollView>
    );
};

export default HomeScreen;