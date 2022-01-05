/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// // Dynamically add Sections

// section_id =0;
// // Event
// const section =document.createElement('div');

// const section_text = document.createTextNode('this is a new section');

// section.appendChild(section_text);

// document.body.appendChild(section);
// section.classList.add('all_sections');

// section.id=1;

// const navigation=()=>{
//     const nav__a =document.querySelectorAll('.nav__a li');

//     nav__a.forEach((link, index)=>{
//         link.style
//     });
// }

// navigation();


const section = document.querySelectorAll('section');
const nav__li=document.querySelectorAll(' ul li');

window.addEventListener('scroll', ()=>{
    let current_active_section='';
    section.forEach(section=>{
        const top =section.offsetTop;
        const height= section.clientHeight;
        if (pageYOffset>=(top-height/4)){
        current_active_section=section.getAttribute('id');
       section.classList.add('your-active-class');
        }
        else
        {
            section.classList.remove('your-active-class');
        }
    })
    
    nav__li.forEach(nav__li=>{
        console.log(nav__li.className);
        nav__li.classList.remove('active');
        if(nav__li.classList.contains(current_active_section)){
            nav__li.classList.add('active');
        }
        })


})

