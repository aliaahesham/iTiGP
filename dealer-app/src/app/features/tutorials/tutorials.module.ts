import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
    declarations: [ListComponent, DetailsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'tutorials', component: ListComponent },
            { path: 'tutorials/details', component: DetailsComponent },

        ])
    ],
})
export class TutorialsModule { }
