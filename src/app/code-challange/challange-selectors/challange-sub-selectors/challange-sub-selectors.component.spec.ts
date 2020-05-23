import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeSubSelectorsComponent } from './challange-sub-selectors.component';

describe('ChallangeSubSelectorsComponent', () => {
    let component: ChallangeSubSelectorsComponent;
    let fixture: ComponentFixture<ChallangeSubSelectorsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChallangeSubSelectorsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChallangeSubSelectorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
