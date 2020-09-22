// Foreach
skills_list = document.getElementById('skill');
var skills = ['HTML', 'CSS', 'Javascript', 'PHP', 'Ruby'];
var skill_parent = '<ul>';

skills.forEach((skill) => {
    skill_parent += `<li>${skill}</li>`;
});

skill_parent += '</ul>'
skills_list.innerHTML += skill_parent;


// Map Data
skills2_list = document.getElementById('skill2');
var skill2_parent = '<ul>';

var primarySkills = skills.map((skill) => {
    skill2_parent += `<li>${skill}</li>`
});

skill2_parent += '</ul>';
skills2_list.innerHTML += skill2_parent;


// Filter Data
const skills3_list = document.getElementById('skill3list'); // DOM
const skills3_points = document.getElementById('points') // DOM

console.log(document)
console.log(skills3_points)

skillData = [{
        name: 'Javascript',
        points: 50
    },
    {
        name: 'PHP',
        points: 75
    },
    {
        name: 'MySQL',
        points: 100
    },
    {
        name: 'MongoDB',
        points: 60
    },
    {
        name: 'Laravel',
        points: 80
    },
    {
        name: 'Vue JS',
        points: 40
    },
    {
        name: 'React',
        points: 20
    },
]; // Skills Data
// var qualified = ''; // Activate if you using .map
var points = 75; // Change minimum qualified points here

var filteredSkills = skillData.filter((skill) => { // You can choose between .filter and .map
    if (skill.points >= points) {
        return skill.name; // .filter
        // qualified += skillname // .map
    }
});

console.log(filteredSkills); // .filter
var qualifiedskills3 = '<ul>';

for (let i = 0; i < filteredSkills.length; i++) {
    qualifiedskills3 += `<li>${filteredSkills[i].name} ( Points : ${filteredSkills[i].points} )</li>`
}

qualifiedskills3 += '</ul>';
window.onload = () => {
        skills3_list.innerHTML += qualifiedskills3;
        skills3_points.textContent = points;
    }
    // skills3_list.innerHTML += qualified; // .map

// PROBLEM "I CANT CHANGE THE DOM OF SKILLS3POINTS  15.37 22 SEP 2020"


// Classes