import { MatTabsModule } from '@angular/material/tabs';
import { NgModule, ModuleWithProviders } from '@angular/core';

import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { A11yModule } from '@angular/cdk/a11y';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatTreeModule} from '@angular/material/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import {BidiModule} from '@angular/cdk/bidi';


@NgModule({
  exports: [
    A11yModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatPaginatorModule,
    MatListModule,
    MatChipsModule,
    DragDropModule,
    MatBottomSheetModule,
    MatTreeModule,
    MatBadgeModule,
    MatStepperModule,
    BidiModule
  ]
})
export class DemoMaterialModule {
  static forRoot(): ModuleWithProviders<DemoMaterialModule> {
    return {
      ngModule: DemoMaterialModule,
      providers:[
        {provide:MatDialogRef , useValue:{} },
        { provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    };
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
