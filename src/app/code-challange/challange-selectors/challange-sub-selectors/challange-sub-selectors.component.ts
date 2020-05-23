import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-challange-sub-selectors',
    templateUrl: './challange-sub-selectors.component.html',
    styleUrls: ['./challange-sub-selectors.component.scss']
})
export class ChallangeSubSelectorsComponent implements OnInit {
    constructor() { }

    @Output() selected_item_state = new EventEmitter();
    @Input() select_all: any;
    @Input() sub_properties: any;
    @Input() sub_item_index: any;
    selected = false;



    category_select() {
        // Toggle UI
        this.selected = !this.selected;


        this.selected_item_state.emit({
            'item_position': this.sub_item_index,
            'selected_value': this.selected
        })
    }

    ngOnInit(): void {
    }

    ngOnChanges() {
        if (this.select_all) {
            this.selected = true;
            // console.log('if (this.select_all)')
        } else {
            this.selected = false;
            // console.log('else (this.select_all)')
        }
    }

}
