import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-code-challange',
    templateUrl: './code-challange.component.html',
    styleUrls: ['./code-challange.component.scss']
})
export class CodeChallangeComponent implements OnInit {
    constructor() { }

    // Initialize empty map variable
    select_state = [];
    result = [];

    // Mock Data
    JSON_data = {
        'header_name': 'Property Selector',
        'game_name': 'Monopoly Inc.',
        'properties': [
            {
                'category_name': 'Blue Properties',
                'sub_properties': [
                    'Park Place',
                    'Boardwalk'
                ]
            },
            {
                'category_name': 'Brown Properties',
                'sub_properties': [
                    'Mediterranean Avenue',
                    'Baltic Avenue'
                ]
            }
        ]
    };

    JSON_data_header = {
        'header_name': this.JSON_data['header_name'],
        'game_name': this.JSON_data['header_name']
    }

    // display the selected item
    // or display 'Multiple slected...'
    selection_state = '';

    receive_selector_state(selected) {
        // onClick, receive && update 
        // all the sub_property states
        // of 1 property
        this.select_state[selected['property']].subProperties_selected = selected['subProperties_selected'];

        // console.warn('aiiasidiasi', this.select_state)


        this.result = []

        var properties = this.JSON_data['properties'];
        // console.warn('bbbbbbbbb', this.select_state)

        for (let i = 0; i < properties.length; i++) {
            for (let k = 0; k < properties[i]['sub_properties'].length; k++) {
                // pe baza map-ului de selecter[true/false]
                // display data from the received object
                if (!!this.select_state[i]['subProperties_selected'][k]) {
                    this.result.push(properties[i]['sub_properties'][k])
                }
            }
        }

        // Prints the names of the selected items
        console.warn('CurrentSelected: ', this.result)

        if (this.result.length === 1) {
            this.selection_state = this.result[0];
        } else if (this.result.length === 0) {
            this.selection_state = '';
        } else {
            this.selection_state = 'Multiple Items Selected';
        }
    }

    // Apply Button, 'send' data
    send_data(data) {
        console.warn('CurrentSelected: ', this.result)
    }

    ngOnInit(): void {
        //create an empty (all false) map from the received data
        var properties = this.JSON_data['properties'];
        for (let i = 0; i < properties.length; i++) {
            this.select_state.push({ 'property': i, 'subProperties_selected': [] })
            for (let k = 0; k < properties[i]['sub_properties'].length; k++) {
                this.select_state[i]['subProperties_selected'][k] = false;
            }
        }
        //this map will receive updates from the child components onClick
    }

}
