//console.log("Hello World!");
import('./css/styles.styl');
import logo from './img/apple-touch-icon.png';
import $ from "jquery";

var jq = $.noConflict();
(function($){
    $('.logo > a > img').attr('src',logo);
})(jq);