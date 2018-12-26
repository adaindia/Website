



import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Circ, Back, Elastic, Power4} from 'gsap/all';

declare var TweenMax: any;
declare var TimelineMax: any;
declare var $: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('') box: ElementRef;

  ngOnInit(){



//vars
const alice = document.querySelectorAll('.example__element');

//elements start from a transform rotate of 0 degrees 
//and end taking up the default position as set 
//in CSS. repeat set to -1 makes the animation 
//last indefinitely.
//yoyo set to true makes the animation alternate
//repeatDelay puts a 1 second delay in between alternations
TweenMax.from(alice, 1.5, {
  rotation: 0,
  delay: 1.5,
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
  ease:  Power4.easeIn
});


}}

