const newTabLinks = [
    {
        "name":"Resume",
        "link":"Resume_Humberto_Rendon.pdf"
    }
]

const links = [
    {
        "name":"Projects",
        "link":"projects.html"
    },
    {
        "name":"Tutorials",
        "link":"tutorials.html"
    },
    {
        "name":"Contact Me",
        "link":"contact.html"
    },
    {
        "name":"About Me",
        "link":"aboutMe.html"
    }
]

function navBarElement(){
    let navBar = document.createElement('div');
    navBar.classList.add('nav-bar')
    
    navBar.appendChild(navBarLeftElement());
    navBar.appendChild(navBarRightElement());
    return navBar;    
}

function navBarLeftElement(){
    let navBarLeft = document.createElement('div');
    navBarLeft.classList.add('nav-bar-left')

    let navBarHomeLink = document.createElement('a');
    navBarHomeLink.classList.add('home-link');
    navBarHomeLink.classList.add('nav-bar-link');
    navBarHomeLink.setAttribute('href','..\\index.html');

    let navBarHomeImg = document.createElement('img');
    navBarHomeImg.style.height = "25px";
    navBarHomeImg.style.width = "25px";
    navBarHomeLink.textContent = "Humberto Rendon";

    navBarHomeLink.prepend(navBarHomeImg);
    navBarLeft.appendChild(navBarHomeLink);
    return navBarLeft;
}

function navBarRightElement(){
    let navBarRight = document.createElement('div')
    navBarRight.classList.add('nav-bar-right');

    newTabLinks.forEach((link) => {
        let navBarLink = document.createElement('a');
        navBarLink.classList.add('nav-bar-link');
        navBarLink.setAttribute('href',`${link.link}`);
        navBarLink.textContent = `${link.name}`;
        navBarLink.setAttribute('target','_blank');
        navBarRight.appendChild(navBarLink);
    })


    links.forEach((link) => {
        let navBarLink = document.createElement('a');
        navBarLink.classList.add('nav-bar-link');
        navBarLink.setAttribute('href',`${link.link}`);
        navBarLink.textContent = `${link.name}`;
        navBarRight.appendChild(navBarLink);
    })

    return navBarRight;
}


document.body.appendChild(navBarElement());