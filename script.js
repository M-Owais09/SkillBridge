// ======================================================
// SkillBridge - Main JavaScript File
// ======================================================


// Wait until HTML is completely loaded
document.addEventListener("DOMContentLoaded", () => {

    initializeIndex();
    initializeProfile();
    initializeProjects();
    initializeCommunity();
    initializeOpportunities();

});

// ======================================================
// Badge Questions
// ======================================================

const badgeQuizzes = {

    html: [
        {
            question: "Which tag creates a paragraph?",
            options: ["div tag", "p tag", "h1 tag"],
            answer: 1
        },

        {
            question: "Which tag creates a hyperlink?",
            options: ["a tag", "link tag", "url tag"],
            answer: 0
        },

        {
            question: "HTML stands for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Tool Markup Language"
            ],
            answer: 0
        }
    ],

    css: [
        {
            question: "CSS is mainly used for?",
            options: ["Logic", "Styling", "Database"],
            answer: 1
        },

        {
            question: "Which property changes text color?",
            options: ["font-color", "text-color", "color"],
            answer: 2
        },

        {
            question: "Which property creates space outside an element?",
            options: ["padding", "margin", "border"],
            answer: 1
        }
    ],

    javascript: [
        {
            question: "Which keyword declares a variable?",
            options: ["var", "include", "define"],
            answer: 0
        },

        {
            question: "Which function shows a popup?",
            options: ["print()", "alert()", "cout()"],
            answer: 1
        },

        {
            question: "JavaScript is mainly used for?",
            options: ["Interactivity", "Database", "Operating System"],
            answer: 0
        }
    ],

    problem: [
        {
            question: "What is debugging?",
            options: [
                "Adding bugs",
                "Fixing errors",
                "Deleting files"
            ],
            answer: 1
        },

        {
            question: "Algorithms are?",
            options: [
                "Step by step solutions",
                "Programming languages",
                "Databases"
            ],
            answer: 0
        },

        {
            question: "Breaking big problems into smaller parts is called?",
            options: [
                "Decomposition",
                "Inheritance",
                "Compilation"
            ],
            answer: 0
        }
    ],

    team: [
        {
            question: "Good teamwork requires?",
            options: [
                "Communication",
                "Ignoring teammates",
                "Working alone"
            ],
            answer: 0
        },

        {
            question: "Version control helps teams by?",
            options: [
                "Deleting code",
                "Tracking changes",
                "Making computers faster"
            ],
            answer: 1
        },

        {
            question: "A good teammate should?",
            options: [
                "Collaborate",
                "Hide information",
                "Avoid responsibility"
            ],
            answer: 0
        }
    ]
};

// ======================================================
// HOME PAGE
// ======================================================

function initializeIndex() {

    // Exit if we are not on index.html
    const homeSection = document.getElementById("home");

    if (!homeSection)
        return;

    // Future index page functionality can be added here
    console.log("Index page initialized.");

}

// ======================================================
// PROFILE PAGE
// ======================================================

function initializeProfile() {

// Required Elements
    const profileSetup =
        document.getElementById("profile-setup");

    const dashboard =
        document.getElementById("profile-dashboard");

    // Exit if not on profile page
    if (!profileSetup || !dashboard)
        return;

const createButton =
    document.getElementById("create-profile-btn");

const nameInput =
    document.getElementById("name-input");

const universityInput =
    document.getElementById("university-input");

const bioInput =
    document.getElementById("bio-input");

const skillsInput =
    document.getElementById("skills-input");

const displayName =
    document.getElementById("display-name");

const displayUniversity =
    document.getElementById("display-university");

const displayBio =
    document.getElementById("display-bio");

const displaySkills =
    document.getElementById("display-skills");

const deleteButton =
    document.getElementById("delete-profile-btn");

const editButton =
    document.getElementById("edit-profile-btn");


// Hide dashboard initially
dashboard.style.display = "none";


// Check if profile already exists
const savedProfile =
    localStorage.getItem("profileData");

if (savedProfile)
{
    profileSetup.style.display = "none";

    dashboard.style.display = "block";

    loadProfile();
    loadBadges();
    updateStrength();
}

// CREATE PROFILE
createButton.addEventListener("click", () => {

    if (
        nameInput.value.trim() === "" ||
        universityInput.value.trim() === ""
    )

    {
    alert("Please fill all required fields.");
    return;
    }
    
    const profileData = {

        name:
            nameInput.value,

        university:
            universityInput.value,

        bio:
            bioInput.value,

        skills:
            skillsInput.value
    };


    // Save profile permanently
    localStorage.setItem(
        "profileData",
        JSON.stringify(profileData)
    );


    profileSetup.style.display = "none";

    dashboard.style.display = "block";

    loadProfile();
    loadBadges();
    updateStrength();

});

// ======================================================
// DELETE PROFILE
// ======================================================

deleteButton.addEventListener("click", () => {

    const confirmation =
        confirm(
            "Are you sure you want to delete your profile?"
        );

    if (!confirmation)
        return;


    // Remove saved data
    localStorage.removeItem("profileData");

    localStorage.removeItem("earnedBadges");


    // Show form again
    dashboard.style.display = "none";

    profileSetup.style.display = "block";


    // Clear input fields
    nameInput.value = "";

    universityInput.value = "";

    bioInput.value = "";

    skillsInput.value = "";


    alert("Profile deleted successfully.");

});

// ======================================================
// EDIT PROFILE
// ======================================================

editButton.addEventListener("click", () => {

    const profile =
        JSON.parse(
            localStorage.getItem("profileData")
        );

    if (!profile)
        return;


    // Fill form with previous data
    nameInput.value =
        profile.name;

    universityInput.value =
        profile.university;

    bioInput.value =
        profile.bio;

    skillsInput.value =
        profile.skills;


    // Show form again
    dashboard.style.display = "none";

    profileSetup.style.display = "block";

});

// Badge buttons
const badgeButtons =
    document.querySelectorAll(".badge-btn");

badgeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const badge =
            button.dataset.badge;
        startQuiz(badge);

    });
});
}

// ======================================================
// PROJECTS PAGE
// ======================================================

function initializeProjects(){

const addButton=
document.getElementById("add-project-btn");

if(!addButton)
return;

console.log("Projects page initialized.");

const formContainer=
document.getElementById("project-form-container");

const saveButton=
document.getElementById("save-project-btn");

const cancelButton=
document.getElementById("cancel-project-btn");

const noProjects=
document.getElementById("no-projects-message");

formContainer.style.display="none";

loadProjects();


// Open form
addButton.addEventListener("click",()=>{

    formContainer.style.display="block";

});


// Close form
cancelButton.addEventListener("click",()=>{

    formContainer.style.display="none";

});


// Save project
saveButton.addEventListener("click",()=>{

    const title=
    document.getElementById("project-title").value.trim();

    const description=
    document.getElementById("project-description").value.trim();

    const technologies=
    document.getElementById("project-technologies").value.trim();

    const type=
    document.getElementById("project-type").value;

    const status=
    document.getElementById("project-status").value;

    const link=
    document.getElementById("project-link").value.trim();

    if(title===""||description==="")
    {
        alert("Please fill required fields.");
        return;
    }

    const project={

        title,
        description,
        technologies,
        type,
        status,
        link
    };

    let projects=
    JSON.parse(
        localStorage.getItem("projects")
    )||[];

    projects.push(project);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    clearProjectForm();

    formContainer.style.display="none";

    loadProjects();

});

}

// ======================================================
// COMMUNITY PAGE
// ======================================================

function initializeCommunity() {

    const buttons =
        document.querySelectorAll(".connect-btn");

    if (buttons.length === 0)
        return;

    console.log("Community page initialized.");

}



// ======================================================
// OPPORTUNITIES PAGE
// ======================================================

function initializeOpportunities() {

    const buttons =
        document.querySelectorAll(".apply-btn");

    if (buttons.length === 0)
        return;

    console.log("Opportunities page initialized.");

}

// ======================================================
// LOAD PROFILE FROM LOCAL STORAGE
// ======================================================

function loadProfile()
{
    const profile =
        JSON.parse(
            localStorage.getItem("profileData")
        );

    if (!profile)
        return;


    document.getElementById(
        "display-name"
    ).innerText = profile.name;


    document.getElementById(
        "display-university"
    ).innerText = profile.university;


    document.getElementById(
        "display-bio"
    ).innerText = profile.bio;


    // Create skill tags
    const skillsContainer =
        document.getElementById("display-skills");

    skillsContainer.innerHTML = "";

    const skills =
        profile.skills.split(",");

    skills.forEach(skill => {

        const tag =
            document.createElement("span");

        tag.classList.add("skill-tag");

        tag.innerText =
            skill.trim();

        skillsContainer.appendChild(tag);

    });

}

function loadBadges()
{
    const container =
        document.getElementById(
            "badges-container"
        );

    if(!container)
        return;

    const badges =
        JSON.parse(
            localStorage.getItem(
                "earnedBadges"
            )
        ) || [];

    if(badges.length===0)
    {
        container.innerHTML =
            "<p>No badges earned yet.</p>";

        return;
    }

    container.innerHTML = "";

    badges.forEach(badge=>{

        const div =
            document.createElement("div");

        div.classList.add("badge-card");

        div.innerText =
            badge.toUpperCase()+" Badge";

        container.appendChild(div);

    });

}

function updateStrength()
{
    const strength =
        document.getElementById(
            "strength-percentage"
        );

    if(!strength)
        return;

    let percent = 0;

    const profile =
        JSON.parse(
            localStorage.getItem(
                "profileData"
            )
        );

    if(profile)
        percent += 80;

    const badges =
        JSON.parse(
            localStorage.getItem(
                "earnedBadges"
            )
        ) || [];

    percent += badges.length * 4;

    if(percent>100)
        percent = 100;

    strength.innerText =
        percent + "%";
}

function startQuiz(badgeName)
{
    const quizSection =
        document.getElementById("quiz-section");

    const quizContainer =
        document.getElementById("quiz-container");

    quizSection.style.display = "block";

    const questions =
        badgeQuizzes[badgeName];

    let html = "";

    questions.forEach((question,index)=>{

        html += `
        <div class="question-card">

            <h3>Question ${index+1}</h3>

            <p>${question.question}</p>
        `;

        question.options.forEach((option,optionIndex)=>{

            html += `
            <label>

                <input
                    type="radio"
                    name="q${index}"
                    value="${optionIndex}">

                ${option}

            </label><br>
            `;
        });

        html += `</div><hr>`;
    });

    html += `
    <button
        id="submit-quiz-btn"
        class="btn primary-btn">

        Submit Quiz

    </button>
    `;

    quizContainer.innerHTML = html;
    document
.getElementById("submit-quiz-btn")
.addEventListener("click",()=>{

    submitQuiz(badgeName);

});
}

function submitQuiz(badgeName)
{
    const questions = badgeQuizzes[badgeName];

    let score = 0;

    questions.forEach((question,index)=>{

        const selected =
            document.querySelector(
                `input[name="q${index}"]:checked`
            );

        if(
            selected &&
            Number(selected.value) === question.answer
        )
        {
            score++;
        }

    });

    if(score >= 2)
    {
        alert("Badge Earned!");

        let badges =
            JSON.parse(
                localStorage.getItem("earnedBadges")
            ) || [];

        if(!badges.includes(badgeName))
        {
            badges.push(badgeName);

            localStorage.setItem(
                "earnedBadges",
                JSON.stringify(badges)
            );
        }

        loadBadges();
        updateStrength();
    }
    else
    {
        alert(
            "You need at least 2 correct answers."
        );
    }

    document.getElementById(
        "quiz-section"
    ).style.display = "none";
}

function loadProjects(){

const container=
document.getElementById("projects-container");

if(!container)
return;

const noProjects=
document.getElementById("no-projects-message");

const projects=
JSON.parse(
localStorage.getItem("projects")
)||[];

container.innerHTML="";

if(projects.length===0)
{
    noProjects.style.display="block";
    return;
}

noProjects.style.display="none";

projects.forEach((project,index)=>{

container.innerHTML+=`

<div class="card">

<h3>${project.title}</h3>

<p>${project.description}</p>

<p><strong>Technologies:</strong>
${project.technologies}</p>

<p><strong>Type:</strong>
${project.type}</p>

<p><strong>Status:</strong>
${project.status}</p>

${
project.link!=="" ?
`<a href="${project.link}"
target="_blank">
View Project
</a>`
:
""
}

<br><br>

<button
onclick="deleteProject(${index})"
class="btn secondary-btn">

Delete

</button>

</div>

`;

});

}

function clearProjectForm(){

document.getElementById(
"project-title"
).value="";

document.getElementById(
"project-description"
).value="";

document.getElementById(
"project-technologies"
).value="";

document.getElementById(
"project-link"
).value="";

}

function deleteProject(index){

let projects=
JSON.parse(
localStorage.getItem("projects")
)||[];

projects.splice(index,1);

localStorage.setItem(
"projects",
JSON.stringify(projects)
);

loadProjects();

}