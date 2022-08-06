// get slider item 
let sliderImg = Array.from( document.querySelectorAll( '.slider-container img' ) );

// get numper of slides

let slideCount = sliderImg.length;

// set current slide

let currentSlide = 6;

// get slide number

let slideNumber = document.getElementById( 'slide-number' );

// previos and next button

let prevBtn = document.getElementById( 'prev' );
let nextBtn = document.getElementById( 'next' );

// handel click button

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

let paginationEliment = document.createElement( 'ul' );

paginationEliment.setAttribute( 'id', 'pagination-ul' );

for ( i = 1; i <= slideCount; i++ ) {
    let paginationItem = document.createElement( 'li' );

    paginationItem.setAttribute( 'data-index', i );

    paginationItem.appendChild( document.createTextNode( i ) );

    paginationEliment.appendChild( paginationItem );

}

document.getElementById( 'indector' ).appendChild( paginationEliment );

let paginationUl = document.getElementById( 'pagination-ul' );

let paginationbullit = document.getElementById( 'pagination-ul li' );

//loop through all bullit items
for ( let i = 0; i < paginationbullit.length; i++ ) {
    paginationbullit[ i ].onclick = function () {

        currentSlide = parseInt( this.getAttribute( 'data-index' ) );

        thechecker();
    };
}

thechecker();


function nextSlide () {
    if ( nextBtn.classList.contains( 'disabled' ) ) {
        return false;
    }
    else {
        currentSlide++;
        thechecker();
    }
};

function prevSlide () {
    if ( prevBtn.classList.contains( 'disabled' ) ) {
        return false;
    }
    else {
        currentSlide--;
        thechecker();
    }
}

function thechecker () {
    //set the slide number
    slideNumber.textContent = ' Slide # ' + ( currentSlide ) + ' Of ' + ( slideCount );

    removeAllActive();

    //set active class on current slide
    sliderImg[ currentSlide - 1 ].classList.add( 'active' );
    // set active class on current pagination item
    paginationUl.children[ currentSlide - 1 ].classList.add( 'active' );
    // check if the cuurent slide is the first 
    if ( currentSlide == 1 ) {
        prevBtn.classList.add( 'disabled' );
    } else (
        prevBtn.classList.remove( 'disabled' )
    );
    // check if the cuurent slide is the last 
    if ( currentSlide == slideCount ) {
        nextBtn.classList.add( 'disabled' );
    } else (
        nextBtn.classList.remove( 'disabled' )
    );
}

//call function inside another
// remove all active classes from images and pagination

function removeAllActive () {
    // loop through img
    sliderImg.forEach( function ( img ) {
        img.classList.remove( 'active' );
    } );
    //lopp through pagination
    paginationbullit.forEach( function ( bullit ) {
        bullit.classList.remove( 'active' );
    } );
}