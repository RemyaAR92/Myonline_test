import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const PIPES :any[]= [
];
const DIRECTIVE:any[] = [
]
const DECLARATIONS:any[] = [
]
@NgModule({
  declarations: [...DIRECTIVE, DECLARATIONS, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,

  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...PIPES,
    ...DIRECTIVE,
    DECLARATIONS
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    }
  }
}
