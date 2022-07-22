import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColorPickerModule } from 'ngx-color-picker';
import { appSettingManager } from '../shared/services/restcontroller/bizservice/app-settings.service';
import { AssayManager } from '../shared/services/restcontroller/bizservice/Assay.service';
import { AssayTypeManager } from '../shared/services/restcontroller/bizservice/assayType.service';

import { CategoryManager } from '../shared/services/restcontroller/bizservice/category.service';
import { CategoryfunctionManager } from '../shared/services/restcontroller/bizservice/categoryFunction.service';

import { LigandManager } from '../shared/services/restcontroller/bizservice/ligandManager.service';
import { LigandTypeManager } from '../shared/services/restcontroller/bizservice/ligandType.service';
import { LigandVersionManager } from '../shared/services/restcontroller/bizservice/ligandVersion.service';
import { MeasurementManager } from '../shared/services/restcontroller/bizservice/Measurement.service';
import { OriginalprefixManager } from '../shared/services/restcontroller/bizservice/originalPrefix.service';
import { LigandReportsManager } from '../shared/services/restcontroller/bizservice/report.service';
import { RouteofAdminManager } from '../shared/services/restcontroller/bizservice/routeOfAdministration.service';
import { TaskAllocationManager } from '../shared/services/restcontroller/bizservice/taskAllocation.service';
import { ToxicityManager } from '../shared/services/restcontroller/bizservice/toxiCity.service';
import { BioTypeManager } from '../shared/services/restcontroller/bizservice/type.service';
import { UnitlowendvalueManager } from '../shared/services/restcontroller/bizservice/Unitlowendvalue.service';
import { UnitSingleValueManager } from '../shared/services/restcontroller/bizservice/unitSingleValue.service';
import { UserManager } from '../shared/services/restcontroller/bizservice/user.service';
import { DataSharedService } from '../shared/services/services/datashared.service';
import { AdminComponent } from './admin/admin.component';
import { AssayComponent } from './assay/assay.component';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { DashboardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LigandComponent } from './ligand/ligand.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { ReportComponent } from './report/report.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { StatusComponent } from './status/status.component';
import { StepperComponent } from './stepper/stepper.component';
import { TargetComponent } from './target/target.component';
import { ReviewerWorkStatusComponent } from './reviewer-work-status/reviewer-work-status.component';
import { MyWorkComponent } from './my-work/my-work.component';
// import { GoJsChartComponent } from './body/go-js-chart/go-js-chart.component';


// import {NgxCumulioComponent} from 'ngx-cumulio';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({

    declarations: [
        DashBoardComponent,
        HeaderComponent,
        FooterComponent,
        SideMenuComponent,
        LigandComponent,
        TargetComponent,
        AssayComponent,
        MeasurementComponent,
        StepperComponent,
        ReportComponent,
        AdminComponent,
        StatusComponent,
        // ReviewerWorkStatusComponent,
        // MyWorkComponent,
        // BreadcrumbComponent
        // MasterComponent,
        // RadarChartComponent,
        // ModernChartComponent,
        //  GoJsChartComponent



        // NgxCumulioComponent,
    ],

    imports: [
        FormsModule,
        // BarChartModule,
        // D3Module, 
        // MatDividerModule,
        // MatToolbarModule,
        TranslateModule.forRoot(),
        AgGridModule.withComponents([]),
        MatMenuModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        FlexLayoutModule,
        MatSidenavModule,
        ColorPickerModule,
        DashboardRoutingModule,
        CdkStepperModule,
        BreadcrumbModule,
        A11yModule,
        CdkAccordionModule,
        ClipboardModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        OverlayModule,
        PortalModule,
        ScrollingModule,
        DropdownModule
    ],
    providers: [DataSharedService,
        appSettingManager,
        UserManager,
        LigandManager,
        LigandVersionManager,
        LigandTypeManager,
        AssayManager,
        MeasurementManager,
        UnitSingleValueManager,
        UnitlowendvalueManager,
        AssayTypeManager,
        ToxicityManager,
        RouteofAdminManager,
        CategoryManager,
        CategoryfunctionManager,
        OriginalprefixManager,
        BioTypeManager,
        LigandReportsManager,
        TaskAllocationManager

    ],
    exports: [NgbCollapseModule],
})
export class DashboardModule { }

