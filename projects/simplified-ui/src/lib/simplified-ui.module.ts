import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { SimplifiedUiComponent } from './simplified-ui.component';
import { MaterialModule } from './material-module/material.module';
import { SaPrimaryButtonComponent } from './sa-primary-button/sa-primary-button.component';
import { SaDataTableComponent } from './sa-data-table/sa-data-table.component';
import { CommonModule } from '@angular/common';
import { SaDataFilterComponent } from './sa-data-filter/sa-data-filter.component';
import { SaDatePickerComponent } from './sa-date-picker/sa-date-picker.component';
import { SaDateTimePipe, MOMENT_FORMATS } from './pipes/sa-date-time.pipe';
import { SaValueFormatterPipe } from './pipes/sa-value-formatter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaSelectComponent } from './sa-select/sa-select.component';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';
import { SaSecondaryButtonComponent } from './sa-secondary-button/sa-secondary-button.component';
import { SaAnchorButtonComponent } from './sa-anchor-button/sa-anchor-button.component';
import { SaCurrencyInputComponent } from './sa-currency-input/sa-currency-input.component';
import { SaTableOfContentsComponent } from './sa-table-of-contents/sa-table-of-contents.component';
import { SaTextEditorComponent } from './sa-text-editor/sa-text-editor.component';
import { QuillModule } from 'ngx-quill';
import { SaBaseHeaderComponent } from './sa-base-header/sa-base-header.component';
import { SaHeaderComponent } from './sa-header/sa-header.component';
import { SaBasePageComponent } from './sa-base-page/sa-base-page.component';
import { SaNavigablePageComponent } from './sa-navigable-page/sa-navigable-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaStepperComponent } from './sa-stepper/sa-stepper.component';
import { SaMoreMenuComponent } from './sa-more-menu/sa-more-menu.component';
import { SaButtonComponent } from './sa-button/sa-button.component';
import { SaSpinnerDirective } from './directives/sa-spinner.directive';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AbbreviateNumberPipe } from './pipes/abbreviate-number.pipe';
import Counter from './sa-text-editor/counter';
import {
  OwlDateTimeModule,
  OWL_DATE_TIME_FORMATS,
  OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS
} from '@danielmoncada/angular-datetime-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SaPageHeaderComponent } from './sa-page-header/sa-page-header.component';

@NgModule({
  declarations: [
    SimplifiedUiComponent,
    SaPrimaryButtonComponent,
    SaDataTableComponent,
    SaDataFilterComponent,
    SaDatePickerComponent,
    SaDateTimePipe,
    SaValueFormatterPipe,
    SaSelectComponent,
    SaSecondaryButtonComponent,
    SaAnchorButtonComponent,
    SaTableOfContentsComponent,
    SaTextEditorComponent,
    SaCurrencyInputComponent,
    SaTableOfContentsComponent,
    SaBaseHeaderComponent,
    SaHeaderComponent,
    SaBasePageComponent,
    SaNavigablePageComponent,
    SaStepperComponent,
    SaMoreMenuComponent,
    SaButtonComponent,
    SaSpinnerDirective,
    AbbreviateNumberPipe,
    SaPageHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    MatSelectInfiniteScrollModule,
    FlexLayoutModule,
    QuillModule.forRoot({
      formats: [
        'background',
        'bold',
        'color',
        'font',
        'code',
        'italic',
        'link',
        'size',
        'strike',
        'script',
        'underline',
        'blockquote',
        'header',
        'indent',
        'list',
        'align',
        'direction',
        'code-block',
        'formula'
      ],
      customOptions: [
        {
          import: 'formats/font',
          whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
        }
      ],
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ['link']
        ]
      }
    }),
    MaterialModule,
    MatFormFieldModule,
    RouterModule
  ],
  exports: [
    SimplifiedUiComponent,
    MaterialModule,
    SaPrimaryButtonComponent,
    SaSecondaryButtonComponent,
    SaAnchorButtonComponent,
    SaDataTableComponent,
    SaDataFilterComponent,
    SaDatePickerComponent,
    SaDateTimePipe,
    SaValueFormatterPipe,
    SaSelectComponent,
    SaTableOfContentsComponent,
    SaTextEditorComponent,
    SaCurrencyInputComponent,
    SaTableOfContentsComponent,
    SaBaseHeaderComponent,
    SaHeaderComponent,
    SaBasePageComponent,
    SaNavigablePageComponent,
    SaStepperComponent,
    SaMoreMenuComponent,
    SaButtonComponent,
    SaSpinnerDirective,
    AbbreviateNumberPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [MatProgressSpinner],
  providers: [{ provide: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, useValue: { useUtc: true } }, { provide: LOCALE_ID, useValue: 'en-IN' }]   // Override LOCALE_ID to test currency input for INR
})
export class SimplifiedUiModule {}
