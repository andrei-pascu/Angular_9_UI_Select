import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeTitleComponent } from './challange-title.component';

describe('ChallangeTitleComponent', () => {
    let component: ChallangeTitleComponent;
    let fixture: ComponentFixture<ChallangeTitleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChallangeTitleComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChallangeTitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
