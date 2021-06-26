function selectId(name){
    return document.getElementById(name)
}
// window scroll add new navigation background color
const header = document.querySelector('header')
window.addEventListener('scroll', function(){
    if(this.scrollY > 100) {
        header.classList.add('active-nav')
    }else{
        header.classList.remove('active-nav')
    }
    if(this.screenTop > 100){
        header.classList.add('active-nav')
    }
})

// JQUERY START 
$(document).ready(function(){
 
// smooth scroll for IE / EDGE / SAFARI
$('a').on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 400, function(){
            window.location.hash = hash;
        })
    }
})
// mobil menu
const menuBtn = selectId('mobile')
const navArea = selectId('nav-area')
const icon = selectId('mobile-icon')

let isShow = false
menuBtn.addEventListener('click', function(){
    navArea.classList.toggle('menu-show')

    if(isShow){
        icon.innerHTML = '<i class="icofont-navigation-menu"></i>'
        isShow = false
    }else{
        icon.innerHTML = '<i class="icofont-close"></i>'
        isShow = true
    }
})
// nav active 
$('ul .a-nav a').click(function(){
    $('li a').removeClass('active-item');
    $(this).addClass('active-item');
})
// share button 
const shareBtn = selectId('share')
const item1 = selectId('items1')
const item2 = selectId('items2')
const item3 = selectId('items3')
const item4 = selectId('items4')
const item5 = selectId('items5')
shareBtn.addEventListener('click', function(){
    item1.classList.toggle('active')
    item2.classList.toggle('active')
    item3.classList.toggle('active')
    item4.classList.toggle('active')
    item5.classList.toggle('active')
})
// owl carousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// counter up
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
// video box use venobox
    $('.venobox').venobox({
        spinner: 'cube-grid'
    }); 


// filter active button
$('.p-btn').click(function(){
    $('.p-btn').removeClass('active');
    $(this).addClass('active');
})

// mixitup plugin
var mixer = mixitup('.grid');
// form validation
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

   
})