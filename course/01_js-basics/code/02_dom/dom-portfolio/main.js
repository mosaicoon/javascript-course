/**
 * It should print menu .Header-nav-el elements inside #menu
 *
 * <li class="Header-nav-el">
 *     <a href="#menu1">Menu 1</a>
 * </li>
 * 
 * @param menu
 * 
 * @return {undefined}
 */
function printMenu(menu) {
    var menuEl = document.getElementById('menuEL');
    
    // implementation here
}

/**
 * It should print inside #personalEl
 * 
 * <div class="PersonalInfos-image">
 *     <img src="https://www.placecage.com/500/500" alt="">
 * </div>
 * <div class="PersonalInfos-content">
 *     <h1>Name Surname</h1>
 *     <h2>Job position</h2>
 *     <ul class="PersonalInfos-skills">
 *         <li>#skill</li>
 *         <li>#skill</li>
 *         <li>#skill</li>
 *         <li>#... n</li>
 *     </ul>
 * </div>
 * 
 * @return {undefined}
 */
function printPersonalInfos(personal) {
    var personalEl = document.getElementById('personalEl');

    // implementation here
}

/**
 * It should print inside #workEl
 *
 * <h3 class="WorkExperience-title">Work Experience</h3>
 * <div class="WorkExperience-content">
 *     <div class="WorkExperience-row">
 *         <h4>Job Title</h4>
 *         <p>...</p>
 *     </div>
 * </div>
 * 
 * @return {undefined}
 */

function printWorkExperience(work) {
    var workEl = document.getElementById('workEl');

    // implementation here
}

// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVV DON'T TOUCH THIS VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

function render(locale) {
    if ({}.hasOwnProperty.call(api, locale)) {
        if ({}.hasOwnProperty.call(api[locale], 'menu')) {
            printMenu(api[locale].menu);
        }

        if ({}.hasOwnProperty.call(api[locale], 'personal')) {
            printPersonalInfos(api[locale].personal);
        }

        if ({}.hasOwnProperty.call(api[locale], 'works')) {
            printWorkExperience(api[locale].works);
        }
    } else {
        alert('Please fill api data with the ' + locale.toUpperCase() + ' object');
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    var lang = document.querySelector('#language-choice');

    render(lang.value);

    lang.addEventListener('change', function(e) {
        var value = e.target.value;
        render(value);
    })
});  
