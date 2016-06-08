import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {  IWines } from '../wines/wines';
import { IRating } from '../shared/rating';

@Component({
    selector: 'star-rating', // this now makes it a potential nested component
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})


export class StarComponent implements OnChanges {
   // @Input() and @Output are the public API for the nestable component!!!! - DATA FLOW

   @Input() rating: any;
   @Output() ratingClicked: EventEmitter<IRating> = new EventEmitter<IRating>(); // ratingClicked is now a new instance of EventEmitter // event defined as a new instance of an EventEmitter object
    starWidth: number;


  ngOnChanges(): void {
      // listening to bound property on directive
      this.starWidth = this.rating * 86/5;
  }
    
    onClick(): void {

      var ratingD: IRating =  {
          rating: this.rating
      }
        // fire up an event to the parent component
        this.ratingClicked.emit(ratingD);
    }
  
    
}