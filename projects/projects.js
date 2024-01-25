const htmlCssJsProjects = [
    {
        "name":"Expense Calculator",
        "link":"https://github.com/HRen369/simple-projects/tree/main/htmlCssJs/expenseCalculator",
        "status": true
    },
    {
        "name":"Digital Clock",
        "link":"https://github.com/HRen369/simple-projects/tree/main/htmlCssJs/digitalClock",
        "status": true
    },
    {
        "name":"Old To Do List",
        "link":"https://github.com/HRen369/simple-projects/tree/main/htmlCssJs/oldToDoList",
        "status": true
    }
]

const pythonProjects = [
    {
        "name":"Name Generator",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/001-name-generator",
        "status": true
    },
    {
        "name":"Head Tails Generator",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/002-head-tails",
        "status": true
    },
    {
        "name":"Lower-Higher Game",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/003-lower-higher",
        "status": true
    },
    {
        "name":"Temp Converter",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/004-temp-converter",
        "status": true
    },
    {
        "name":"Age Calculator",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/005-calculateAge",
        "status": false
    },
    {
        "name":"Encryptions",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/006-encryptions",
        "status": false
    },
    {
        "name":"Fizz Buzz",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/007-fizzbuzz",
        "status": false
    },
    {
        "name":"Rock Paper Scissors",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/008-rock-paper-scissors",
        "status": true
    },
    {
        "name":"Hangman",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/010-hangman",
        "status": true
    },    
    {
        "name":"Tic-Tac-Toe",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/tic-tac-toe",
        "status": true
    },
    {
        "name":"Keylogger",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/keylogger",
        "status": true
    },
    {
        "name":"Password Manager",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/password-manager",
        "status": true
    },
]

const goProjects = []


const languageList = [
    {
        "name":"HTML, CSS, JS",
        "content":htmlCssJsProjects
    },
    {
        "name":"Python",
        "content":pythonProjects
    },
    {
        "name":"Go",
        "content":goProjects    
    }
]


const projectContents = document.getElementById('lang-proj-content');

function languageListElement(){
    let langList = document.createElement(`div`);
    langList.classList.add(`lang-list`);

    let i = 0;
    languageList.forEach((language) => {
        let singleLang = document.createElement('p');
        singleLang.textContent = `${language.name}`
        singleLang.setAttribute('id',`comp-lang-${i}`);
        singleLang.setAttribute('onclick', `setTab(${i})`)
        langList.appendChild(singleLang);
        i++;
    });
    return langList
}


function projectCardsElement(projects){
        let projCards = document.createElement('div');
        projCards.classList.add(`project-cards`);

        projects.forEach((project) => {

             let projCardLink = document.createElement('a')
             projCardLink.classList.add(`project-link`);
             projCardLink.setAttribute('href', `${project.link}`);
             projCardLink.classList.add('project');
             projCardLink.setAttribute('target', `_blank`);             
             projCardLink.textContent = `${project.name}`
            
            projCards.appendChild(projCardLink);
        })

        return projCards;
}

function setTab(ind){
    projectContents.innerHTML = "";

    let tabContent = languageList[ind].content
    projectContents.appendChild(languageListElement())
    projectContents.appendChild(projectCardsElement(tabContent))

    //document.getElementById(`comp-lang-${ind}`).style.backgroundColor = "#1a1290";
}

setTab(0)
document.getElementsByTagName('head')[0].appendChild(importCss('projects-css','./projects/projects.css'));
