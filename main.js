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
const skill3_slider = document.getElementById('skill3slider'); // DOM
const s3_number = document.getElementById('s3snumber'); // DOM


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

skill3_slider.addEventListener('mousemove', () => {
    skills3_list.innerHTML = '';

    var points = skill3_slider.value;
    s3_number.innerHTML = points;
    console.log(points);

    var filteredSkills = skillData.filter((skill) => { // You can choose between .filter and .map
        if (skill.points >= points) {
            return skill.name; // .filter
            // qualified += skillname // .map
        }
    });
    console.log(filteredSkills); // .filter
    qualifiedskills3 = '<ul>';

    for (let i = 0; i < filteredSkills.length; i++) {
        qualifiedskills3 += `<li>${filteredSkills[i].name} ( Points : ${filteredSkills[i].points} )</li>`
    }
    qualifiedskills3 += '</ul>';
    skills3_list.innerHTML += qualifiedskills3;
});

window.onload = () => {
    skills3_points.textContent = points;
};
// skills3_list.innerHTML += qualified; // .map


// Classes
class Siswa {
    constructor(name, classes, id) {
        this.name = name;
        this.classes = classes;
        this.id = id;
    }

    attend() {
        console.log(`Hello, ${this.name} !. You're on ${this.classes} class. Your ID is ${this.id}`)
    }

    join() {
        console.log(`${this.name} joined class`);
    }
}

class ExtraClass extends Siswa {
    constructor(name, className) {
        super(name);
        this.className = className;
    }

    join() {
        console.log(`${this.name} has joined ${this.className}`);
    }
}

let wahyuamirulloh = new Siswa('Wahyu Amirulloh', '9B', '000001');
wahyuamirulloh.attend();
let Extra000001 = new ExtraClass('Wahyu Amirulloh', 'Sains Club'); // Format : Extra(id)
Extra000001.join();