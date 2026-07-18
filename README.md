# SkillBridge

**Team Name:** NULL POINTER
**Team Members:** 
Muhammad Ahmed 
Muhammad Owais
Muhammad Moeez

**Live Project:** https://skill-bridge-psi-seven.vercel.app/
**GitHub Repository:** https://github.com/M-Owais09/SkillBridge

## What is this project?

- SkillBridge is a website made for students and young professionals who have real skills but no certificates or experience to prove it.
- Most platforms judge people by degrees, certificates or references. This project tries to judge people by what they can actually build and do.
- A user can create a profile, add the projects they have worked on, and let that work speak for their ability instead of relying on paperwork.
- It was built for the BuildByte IEEE NED hackathon, based on the official theme of empowering students, young professionals and communities through technology.

## Problem we are solving

- Many talented students never get noticed because they don't have certificates, references or a strong professional network.
- Courses and certifications often cost money, which not everyone can afford, so skilled people get left out just because of their financial situation.
- Existing systems are usually built assuming people already have stability, documentation and connections, which excludes a lot of capable individuals.
- SkillBridge gives these people an alternate way to be seen, based on their actual skills and work rather than their background.

## How the website actually works

- **Profile System:** When a user fills the profile form (name, university, bio, skills, picture), the data is saved directly in the browser using localStorage. This means the data stays saved even after refreshing the page, without needing a separate server.
- **Picture Upload:** The profile picture is read using the FileReader API and converted into a format that can be stored and displayed instantly, without uploading it anywhere.
- **Projects Section:** Every project a user adds (title, description, technologies, type, status, link) is stored the same way, as a list inside localStorage. Users can add new projects or delete old ones, and the list updates on the page immediately.
- **Skill Badges:** Each badge has a short 3-question quiz. If the user answers at least 2 questions correctly, the badge is unlocked and saved, and it keeps showing up on future visits.
- **Profile Strength:** A simple percentage is calculated based on whether a profile exists and how many badges have been earned, just to make the dashboard feel more complete and gamified.
- **Opportunities and Community Pages:** These sections currently show fixed, hardcoded example data (scholarships, internships, sample community members) to demonstrate what the feature would look like once real data is connected.

## Features

- Create and edit a personal profile with a profile picture, bio and list of skills
- Add, view and delete personal projects with technologies used and optional links
- Earn skill badges by passing small quizzes
- See a profile strength percentage that grows as the profile gets more complete
- Browse example opportunities like scholarships, internships and free courses
- View a community page showing other example profiles for the collaboration feature

## Technologies Used

- HTML for structuring all the pages
- CSS for styling, colors, layout and making the site responsive on mobile
- JavaScript for all the logic, including forms, badges, quizzes and saving/loading data
- Browser localStorage for saving profile and project data on the user's own device
- Vercel for hosting and deploying the live website

## Installation Instructions

- Clone this repository to your computer using the GitHub link (https://github.com/M-Owais09/SkillBridge)
- Open the folder and simply open `index.html` in any browser, no installation or server setup is needed
- All the styling is already linked through `style.css` and all the logic is already linked through `script.js`
- Alternatively, you can skip installation completely and just visit the live link (https://skill-bridge-psi-seven.vercel.app/)

## Future Scope

- Adding a real backend and database so data is not limited to a single browser
- Adding real authentication so users can log in from any device
- Connecting real scholarship and internship APIs instead of fixed example data
- Adding peer endorsements and a working community connection system