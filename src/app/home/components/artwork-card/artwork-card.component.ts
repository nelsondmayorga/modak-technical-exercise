import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IArtWork } from 'src/app/shared/types/artwork.interface';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtworkCardComponent {
  private router = inject(Router);
  @Input() artwork!: IArtWork;

  goToDetail(id: number): void {
    this.router.navigateByUrl(`artwork-detail/${id}`);
  }
}
