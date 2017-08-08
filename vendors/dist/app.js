'use strict';

$(document).ready(function () {

  $('.slider .slides').addClass("owl-carousel");

  $('.slider .slides').owlCarousel({
    items: 1,
    loop: true
  });

  //Click event for the testimonials
  // var $slides = $('.slider .slides');

  // $('.slider_prev').on('click',(e)=>{
  // 	e.preventDefault();

  // 	$slides.trigger('prev.owl.carousel');
  // });

  // $('.slider_next').on('click',(e)=>{
  // 	e.preventDefault();

  // 	$slides.trigger('next.owl.carousel');
  // });

  // Mobile navigation
  //  $('.nav__trigger').on('click', (e)=>{
  //  	$('.nav__trigger').toggleClass('active');

  //  	$('.nav').toggleClass('active');
  //  });
});