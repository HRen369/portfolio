const htmlCssJsProjects = [
    {
        "name":"Expense Calculator",
        "link":"https://github.com/HRen369/simple-projects/tree/main/htmlCssJs/expenseCalculator"
    },
    {
        "name":"Digital Clock",
        "link":"https://github.com/HRen369/simple-projects/tree/main/htmlCssJs/digitalClock"
    },
    {
        "name":"Old To Do List",
        "link":"https://github.com/HRen369/simple-projects/tree/main/htmlCssJs/oldToDoList"
    }
]

const pythonProjects = [
    {
        "name":"Tic-Tac-Toe",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/tic-tac-toe"
    },
    {
        "name":"Rock Paper Scissors",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/rock-paper-scissors"
    },
    {
        "name":"Hangman",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/hangman"
    },    
    {
        "name":"Keylogger",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/keylogger"
    },    
    {
        "name":"Encryptions",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/encryptions"
    },
    {
        "name":"Password Manager",
        "link":"https://github.com/HRen369/simple-projects/tree/main/python/password-manager"
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

    languageList.forEach((language) => {
        let singleLang = document.createElement('p');
        singleLang.textContent = `${language.name}`
        langList.appendChild(singleLang);
    })
    return langList
}


function projectCardsElement(projects){
        let projCards = document.createElement('div');
        projCards.classList.add(`project-cards`);

        projects.forEach((project) => {
             let singleProjCard = document.createElement('div')
             singleProjCard.classList.add(`project`); 

             let projCardLink = document.createElement('a')
             projCardLink.classList.add(`project-link`);
             projCardLink.setAttribute('href', `${project.link}`);
             projCardLink.setAttribute('target', `_blank`);             
             projCardLink.textContent = `${project.name}`
            
            singleProjCard.appendChild(projCardLink);
            projCards.appendChild(singleProjCard);
        })

        return projCards;
}

function setInitalState(){
    setTab(1);    
}

function setTab(ind){
    let tabContent = languageList[ind].content
    projectContents.appendChild(languageListElement())
    projectContents.appendChild(projectCardsElement(tabContent))
}

setInitalState()