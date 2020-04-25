import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {
  @Input() itemId;
  @Input() rating;

  @Output() ratingClick: EventEmitter<any> = new EventEmitter();

  inputName: string;

  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  onClick(rating: number) {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating
    });
  }
}
