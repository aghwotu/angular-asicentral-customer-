import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerCardComponent implements OnInit {
  @Input() customers: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
