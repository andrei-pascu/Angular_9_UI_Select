import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeSelectorsComponent } from './challange-selectors.component';

describe('ChallangeSelectorsComponent', () => {
    let component: ChallangeSelectorsComponent;
    let fixture: ComponentFixture<ChallangeSelectorsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChallangeSelectorsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChallangeSelectorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
