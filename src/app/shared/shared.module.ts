import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LimitCharactersPipe } from './pipes/limitCharacters/limit-characters.pipe';
import { AuthorPipe } from './pipes/author/author.pipe';
import { ImageUrlPipe } from './pipes/imageUrl/image-url.pipe';

@NgModule({
  declarations: [NavBarComponent, LimitCharactersPipe, AuthorPipe, ImageUrlPipe],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavBarComponent, LimitCharactersPipe, AuthorPipe, ImageUrlPipe],
})
export class SharedModule {}
