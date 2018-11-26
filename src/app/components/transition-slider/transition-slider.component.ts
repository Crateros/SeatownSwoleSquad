import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-transition-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('6', style({ transform: 'translateX(0)' })),
      state('5', style({ transform: 'translateX(-12.5%)' })),
      state('4', style({ transform: 'translateX(-25%)' })),
      state('3', style({ transform: 'translateX(-37.5%)' })),
      state('2', style({ transform: 'translateX(-50%)' })),
      state('1', style({ transform: 'translateX(-62.5%)' })),
      state('0', style({ transform: 'translateX(-75%)' })),
      transition('* => *', animate(300))
    ])
  ],
  templateUrl: './transition-slider.component.html',
  styleUrls: ['./transition-slider.component.scss']
})

export class TransitionSliderComponent {
  @Input() activePane: PaneType = '0';
}

type PaneType = '0' | '1' | '2' | '3' | '4' | '5' | '6';
