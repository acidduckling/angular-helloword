import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked($event)">
            <button (click)="onSave($event)">Save</button>
        </div>
    `
})
export class CoursesComponent {
    onSave($event) {
        $event.stopPropagation();
        console.log('Button was clicked', $event);
        
    }

    onDivClicked($event) {
        console.log('Div was clicked', $event);
        
    }
}