import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityService } from './services/app.utility.service';

// the sharedmodule / featuremodule always contains
// CommonModule instead of BrowserModule
@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [UtilityService],
})
export class SharedModule {}
