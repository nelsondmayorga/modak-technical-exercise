import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IArtWork } from 'src/app/shared/types/artwork.interface';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtworkDetailComponent {
  @Input() artwork!: IArtWork;
}
