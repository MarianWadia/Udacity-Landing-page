// build the nav
const navBarList = document.getElementById('navbar__list');
const sectionsList = document.querySelectorAll('section');
for(let i=0; i<sectionsList.length; i++){
    const section = sectionsList[i];
    const navLink = document.createElement('li');
    navLink.innerHTML = `<a href="#section${i+1}" class="menu__link" > ${section.dataset.nav} </a>`;
    navBarList.appendChild(navLink);
}

// Scroll to anchor ID using scrollIntoView event
const navItems = document.querySelectorAll('li');
for(let i=0; i<sectionsList.length; i++){
    for(let x=0; x<navItems.length; x++){
        navItems[x].addEventListener('click', function(event){
            event.preventDefault();
            if(i===x){
                sectionsList[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                /* behaviour proerty defines how to scroll to the element view, block property defines vertical 
                alignment and inline defines horizontal alignment */
            }
        });
    }
}

// hide nav bar when no scroll 
const navHeader = document.querySelector('.page__header');
document.addEventListener('scroll', function(){
    navHeader.style.position = "fixed";
    //using setTimeout to wait sometime before appling the static position 
    setTimeout(function(){
        navHeader.style.position = "static";
    },7000);
});


// Adding the 'active' class to section when near top of viewport
document.addEventListener('scroll', function(){
    for (section of sectionsList){
    sectionRect = section.getBoundingClientRect();
    //console.log(sectionRect.top); //here we have applied this in order to correctly get the values that we used to check over 
     if(sectionRect.top<= 45 && sectionRect.top>-555){
        section.classList.add("active-sec");
     }
     else{
         section.classList.remove("active-sec");
        }
}
});

// Making the sections collapsaible
function collapsaible(){
const elementsOfCollapse = document.getElementsByClassName('collapse');
for(let i=0; i<elementsOfCollapse.length; i++){
    let element =  elementsOfCollapse[i];
    const sectionContent = element.nextElementSibling;
    element.addEventListener('click', function(){
        if (sectionContent.style.display === "block")
            {
                sectionContent.style.display = "none";
            }
        else
            {
                sectionContent.style.display = "block";
            }
    });
}
}

/* scroll to top, false as a parameter in scrollIntoView method will make the top of the element to be aligned to the top 
of the visible area of the scrollable ancestor */

function toTop(){
    const topView = document.querySelector('h1');
    topView.scrollIntoView(false);
}
