import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-challange-selectors',
    templateUrl: './challange-selectors.component.html',
    styleUrls: ['./challange-selectors.component.scss']
})

export class ChallangeSelectorsComponent implements OnInit {
    constructor() {}

    @Output() selected_indexes = new EventEmitter();
    @Input() item: any;
    @Input() index: any;
    selected = false;
    partially_selected = false;
    category_state = [];


    full_category_select(selected_item) {
        // console.log('fghfgh', selected_item)
        this.selected = !this.selected;
        this.partially_selected = this.selected;
        for (let i = 0; i < this.item.sub_properties.length; i++) {
            this.category_state[i] = this.selected;
        }
        // console.warn(this.category_state)
        this.selected_indexes.emit({
            'property': this.index,
            'subProperties_selected': this.category_state
        })
    }

    child_updates_state(updater) {
        // Updates state of property
        // By 1 sub_property
        this.category_state[updater['item_position']] = updater['selected_value']

        // IF all are selected
        if (this.category_state.indexOf(false) === -1) {
            this.selected = true;
            this.partially_selected = true;
            // IF only a partial selection
        } else if (this.category_state.indexOf(true) > -1) {
            this.partially_selected = false;
            // IF no selection
        } else {
            this.selected = false;
            this.partially_selected = false;
        }


        this.selected_indexes.emit({
            'property': this.index,
            'subProperties_selected': this.category_state
        })
    }

    ngOnInit(): void {
        // 'Empty' map of the possible selections
        for (let i = 0; i < this.item.sub_properties.length; i++) {
            this.category_state.push(false)
        }
    }
}
