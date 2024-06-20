{/* <div id="myElement">Resize the window to see the effect.</div> */}


// .my-class-575 {
//     background-color: yellow;
// }
// .my-class-767 {
//     background-color: orange;
// }
// .my-class-991 {
//     background-color: red;
// }
// .my-class-1199 {
//     background-color: green;
// }
// .my-class-1399 {
//     background-color: blue;
// }

function toggleClassBasedOnWidth() {
    const element = document.getElementById('myElement');
    const width575 = window.matchMedia('(max-width: 575.98px)');
    const width767 = window.matchMedia('(max-width: 767.98px)');
    const width991 = window.matchMedia('(max-width: 991.98px)');
    const width1199 = window.matchMedia('(max-width: 1199.98px)');
    const width1399 = window.matchMedia('(max-width: 1399.98px)');

    element.classList.remove('my-class-575', 'my-class-767', 'my-class-991', 'my-class-1199', 'my-class-1399');

    if (width575.matches) {
        element.classList.add('my-class-575');
    } else if (width767.matches) {
        element.classList.add('my-class-767');
    } else if (width991.matches) {
        element.classList.add('my-class-991');
    } else if (width1199.matches) {
        element.classList.add('my-class-1199');
    } else if (width1399.matches) {
        element.classList.add('my-class-1399');
    }
}

// Initial check
toggleClassBasedOnWidth();

// Listen for changes in viewport width
window.addEventListener('resize', toggleClassBasedOnWidth);