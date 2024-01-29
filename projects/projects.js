let cardsGrid = document.getElementById("cards-grid");

function createProjectCard(proj){
    let card = document.createElement("a");
    let cardTitle = document.createElement("p");
    let cardProjLang = document.createElement("p");
    let cardStatus = document.createElement("p");

    card.classList.add("card");
    cardTitle.classList.add("card-link");
    card.setAttribute('href',`${proj['link']}`);
    card.setAttribute('target',`__blank`);
    cardProjLang.classList.add("card-lang");
    cardStatus.classList.add("card-status")

    cardTitle.textContent = `${proj['name']}`;
    cardProjLang.textContent = `${proj['lang']}`;
    cardStatus.textContent = "Status: ";

    if(proj['status'] == false){
        cardStatus.textContent += "Incomplete";
    }
    else{
        cardStatus.textContent += "Complete";
    }


    card.appendChild(cardTitle);
    card.appendChild(cardProjLang);
    card.appendChild(cardStatus);
    return card;
}

const allProjects = () =>{
    let allProjects = [];
    projectContainers.forEach((projectList) =>{
        currentProjects = [];
        projectList["content"].forEach((project) => {
            project['lang'] = projectList['name']
            currentProjects.push(createProjectCard(project));
        })
        allProjects = allProjects.concat(currentProjects);
    })

    return allProjects;
}


function displayCards(projectList){
    cardsGrid.innerHTML = "";
    projectList.forEach(project => {
        cardsGrid.appendChild(project)
    });
}


let displayCardsFunt = () => { displayCards(allProjects()) };
displayCardsFunt();

function dropdownMenu(){
    let dropdown = document.createElement("div");
    dropdown.classList.add('dropdown-content');

    let allLink = document.createElement("div");
    allLink.textContent = "All";
    allLink.addEventListener("click",() =>{
        displayCardsFunt = displayCards(allProjects());
    });

    dropdown.appendChild(allLink);
    projectContainers.forEach((projectList) =>{
        let link = document.createElement('div');
        link.textContent = `${projectList['name']}`;
        link.addEventListener("click",() =>{
             let projCards = projectList['content'].map((proj) =>{
                return createProjectCard(proj);
            });
            displayCardsFunt = displayCards(projCards);
        });
        
        dropdown.appendChild(link);
    })
    return dropdown;
}


document.getElementById('lang-dropdown').appendChild(dropdownMenu());
document.getElementsByTagName('head')[0].appendChild(importCss('projects-css','./projects/projects.css'));