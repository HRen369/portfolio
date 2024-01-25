const newTabLinks = [
    {
        "name":"Resume",
        "link":"./resume/Resume_Humberto_Rendon.pdf"
    }
]

const links = [
    {
        "name":"Projects",
        "link":"./projects.html"
    },
    {
        "name":"Tutorials",
        "link":"./tutorials.html"
    },
    {
        "name":"Contact Me",
        "link":"./contact.html"
    },
    {
        "name":"About Me",
        "link":"./aboutMe.html"
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
    navBarHomeLink.setAttribute('href','./index.html');

    navBarHomeLink.textContent = "Humberto Rendon";
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

function importCss(cssId,cssLink){
    if (!document.getElementById(cssId)){
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = cssLink;
        link.media = 'all';
        return link;
    }
    return document.createElement('link');
}

document.body.appendChild(navBarElement());
document.getElementsByTagName('head')[0].appendChild(importCss('nav-bar-css','./nav-bar/navBar.css'));