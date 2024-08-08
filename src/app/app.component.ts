import { Component, OnInit, EventEmitter } from '@angular/core';
import { LoungeService } from './services/lounge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: { id: number; name: string; image: string; button_text: string }[] = [];
  cardClick: EventEmitter<number> = new EventEmitter<number>();

  constructor(private loungeService: LoungeService) { }

  ngOnInit() {
    this.loungeService.getLounges().subscribe((response) => {
      this.data = response.map(item => ({
        ...item
      }))
      // console.log(this.data);

      this.cardClick.subscribe(id => {
        console.log('Image ID clicked:', id);
      });
    });
  }

  onCardClick(id: number) {
    this.cardClick.emit(id);
  }
}