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
            { path: 'tutorial', component: ListComponent },
            { path: 'tutorial/details', component: DetailsComponent },

        ])
    ],
})
export class TutorialsModule { }
