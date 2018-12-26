

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Circ, Back, Elastic, Power1, Bounce,Power4} from 'gsap/all';



declare var TweenMax: any;
declare var TimelineMax: any;
declare var $: any;

@Component({
  selector: 'app-homedesk',
  templateUrl: './homedesk.component.html',
  styleUrls: ['./homedesk.component.scss']
})
export class HomedeskComponent implements OnInit {
  @ViewChild('pikachu') box: ElementRef;

  ngOnInit(){


//to() method
let toElement = document.querySelector('#to-element');




toElement.addEventListener('mouseenter', () => {
  TweenMax.to(toElement, 1, { rotation: 360 });
});


// cache elements in variables
const box1 = document.querySelector('.box1'),
      box2 = document.querySelector('.box2'),
      topText = document.querySelector('.top-text'),
      middleText = document.querySelector('.middle-text'),
      bottomText = document.querySelector('.bottom-text'),
      replayBtn = document.querySelector('.controls__replay-btn'),
      tl = new TimelineMax();

// set initial property values before animation
tl.set([topText, middleText, bottomText], {
  scale: 0.1,
  autoAlpha: 0
})
.set(topText, {y: '-=300'})
.set(middleText, {x: '+=1000'})
.set(bottomText, {y: '+=1000'})
.to(box1, 1, {  // box 1 rotation
  rotation: 45,
  transformOrigin: 'center bottom',
  ease: Elastic.easeOut
})
.to(box2, 1, { // box 2 rotation
  rotation: -45,
  transformOrigin: 'center bottom',
  ease: Elastic.easeOut
}, '-=1')
.to(box1, 1, {
  rotation: -360,
  ease: Circ.easeIn
})
.to(box2, 1, {
  rotation: 360,
  ease: Circ.easeIn
}, '-=1')
.to(box1, 1, {
  rotation: 45
})
.to(box2, 1, {
  rotation: -45
}, '-=1')
.to([box1,box2], 1, { // both boxes scale down and disappear
  rotationX: 180,
  scale: 0
})
.to(topText, 0.5, { // text animation begins
  scale: 1,
  autoAlpha: 1,
  rotation: 360,
  y: 0
}, '-=0.5')
.to(middleText, 0.5, {
  scale: 1,
  autoAlpha: 1,
  rotation: -360,
  x: 0
}, '-=0.3')
.to(bottomText, 0.5, {
  scale: 1,
  autoAlpha: 1,
  y: 0
}, '-=0.3')
.to(topText, 0.8, {
  y: '-=40',
  ease: Back.easeOut.config(4)
}, '+=0.4')
.to(middleText, 0.6, {
  y: '+=21',
  x: '+=20',
  ease: Back.easeOut.config(4)
}, '-=0.6');

// replay
replayBtn.addEventListener('click', function() {
  tl.restart();
});



}}

