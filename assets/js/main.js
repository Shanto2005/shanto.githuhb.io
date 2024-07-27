document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#porfolio" ),
            "(max-width: 767px)"
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector( "a[href='#porfolio']" )
            .addEventListener( "click", ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);

//Mood Change
let darkMoodButton = document.getElementById("darkMood");
let lightMoodButton = document.getElementById("lightMood");

function updateMoodButtons() {
    if (document.body.classList.contains('dark')) {
        darkMoodButton.style.display = 'none';
        lightMoodButton.style.display = 'inline-block';
    } else {
        darkMoodButton.style.display = 'inline-block';
        lightMoodButton.style.display = 'none';
    }
}

darkMoodButton.addEventListener('click', function() {
    document.body.classList.add('dark');
    updateMoodButtons();
});

lightMoodButton.addEventListener('click', function() {
    document.body.classList.remove('dark');
    updateMoodButtons();
});

// Initial call to set the correct button visibility
updateMoodButtons();



//about me counter
let count = document.querySelectorAll(".count")
let arr = Array.from(count)

arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},200)

})



const progressHtml = document.querySelector('.progressHtml');

progressHtml.style.width = progressHtml.getAttribute('data-done') + '%';
progressHtml.style.opacity = 1;


const progressCss = document.querySelector('.progressCss');

progressCss.style.width = progressCss.getAttribute('data-done') + '%';
progressCss.style.opacity = 1;


const progressJs = document.querySelector('.progressJs');

progressJs.style.width = progressJs.getAttribute('data-done') + '%';
progressJs.style.opacity = 1;


const progressWordpress = document.querySelector('.progressWordpress');

progressWordpress.style.width = progressWordpress.getAttribute('data-done') + '%';
progressWordpress.style.opacity = 1;



document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons that open the modal
    const modalButtons = document.querySelectorAll('.servicesCard button');
    
    // Add click event listener to each button
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest .servicesCard element
            const servicesCard = this.closest('.servicesCard');
            
            // Get the title from the .modalTittle element
            const title = servicesCard.querySelector('.modalTittle').textContent;
            
            // Get the content from the .serviceContent element
            const content = servicesCard.querySelector('.serviceContent').innerHTML;
            
            // Set the title in the modal
            const modalTitle = document.querySelector('#exampleModalLabel');
            modalTitle.textContent = title;
            
            // Set the content in the modal body
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = content;
        });
    });
});




// $('.sponsorPerant').slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 4,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 3,
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//         }
//       }
//     ]
// });