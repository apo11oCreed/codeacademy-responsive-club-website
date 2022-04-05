//console.log("Hello World!");
import './css/styles.styl'
import logo from './img/apple-touch-icon.png'
import imgTheraputic from './img/rifqi-ali-ridho-VlXlW77swwY-unsplash.jpg'
import imgCraftsmanship from './img/roman-kraft-ZdOEgR6pn-A-unsplash.jpg'
import imgIntroduction from './img/alice-dietrich-FwF_fKj5tBo-unsplash.jpg'
import $ from "jquery"

var jq = $.noConflict();
(function($){

    $('.logo > a > img').attr('src',logo);
    $('.painting > svg > image').attr('xlink:href', imgTheraputic);
    $('#craftsmanship img').attr('src', imgCraftsmanship);
    $('#introduction img').attr('src', imgIntroduction);
    
})(jq);

