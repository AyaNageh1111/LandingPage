
/**
 * make list items equal to the number of sections by iterate on them
 * but I need to remove all items to avoid the duplicating
 */
const navBar = document.getElementById("navbar__list");
const CreatNavBar = () => {
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};
/**
 *  function to observe the section to specify which section on the viewport and its link
 *  loop over entries (sections)
 *  get active link by using the id of the section on viewport
 *  add active class to the section on viewport
 *  add active class to the section's link
 *  edit the hash of location manual cause i prevent default behavior
 *  remove active classes
 */

window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}

/**
 * when you click on nav links will go smoothly to the correct section
 */
navBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});


CreatNavBar();


// save the icon used to go to the top and the header in variables
const toTop = document.getElementById("to-top");
const header = document.querySelector(".page__header");

// Clicking on the icon the document will scroll to the top smoothly
toTop.addEventListener("click", () => {
  document.documentElement.scrollTo({ 
    top: 0,
    behavior: "smooth" });
});
/**
 * disappear the header after 8 seconds and appear again when scrolling.
 * appearing the icon(to-top) after 800px to down
 */





