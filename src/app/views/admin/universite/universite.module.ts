import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite/universite.component';
import { FormsModule } from '@angular/forms';
import { AjouterUniversiteComponent } from './ajouter-universite/ajouter-universite.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    UniversiteComponent,
    AjouterUniversiteComponent,
    
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    UniversiteRoutingModule,MatIconModule,FormsModule,Ng2SearchPipeModule


  ]
})
export class UniversiteModule { }
