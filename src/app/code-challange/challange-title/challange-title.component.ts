import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-challange-title',
    templateUrl: './challange-title.component.html',
    styleUrls: ['./challange-title.component.scss']
})
export class ChallangeTitleComponent implements OnInit {
    constructor() {}

    @Output() select_element_toggle = new EventEmitter();
    @Input() passed_data_titles: any;
    @Input() selection_state: string;
    display_element = true;

    toggle_select_element() {
        this.display_element = !this.display_element;
        this.select_element_toggle.emit(this.display_element);
    }

    ngOnInit(): void {
        this.select_element_toggle.emit(this.display_element);
    }
}
