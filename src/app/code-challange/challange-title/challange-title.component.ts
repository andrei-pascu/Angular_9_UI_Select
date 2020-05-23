import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-challange-title',
    templateUrl: './challange-title.component.html',
    styleUrls: ['./challange-title.component.scss']
})
export class ChallangeTitleComponent implements OnInit {
    constructor() {}

    @Input() passed_data_titles: any;
    @Input() selection_state: string;


    ngOnInit(): void {
    }
}
