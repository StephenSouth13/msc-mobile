# msc-fullstack-app

This project is a React Native application that replicates the structure and key sections of the MSC Fullstack website. It includes screens for Home, Courses, Projects, and Mentors, each designed with specific features and components.

## Project Structure

```
msc-fullstack-app
├── src
│   ├── components
│   │   ├── CourseCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── MentorCard.tsx
│   │   └── Header.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   ├── CoursesScreen.tsx
│   │   ├── ProjectsScreen.tsx
│   │   └── MentorsScreen.tsx
│   ├── navigation
│   │   └── AppNavigator.tsx
│   ├── types
│   │   └── index.ts
│   └── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Home Screen**: Displays a hero section, projects, mentors, and testimonials/partners.
- **Courses Screen**: Includes a header, filter/category tabs, and a grid layout for course cards.
- **Projects Screen**: Features a hero section, stats section, and a grid layout for project cards.
- **Mentors Screen**: Displays a title and a grid layout for mentor cards.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd msc-fullstack-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the App

To run the application, use the following command:
```
npm start
```

This will start the Metro bundler, and you can then run the app on your preferred device or emulator.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.