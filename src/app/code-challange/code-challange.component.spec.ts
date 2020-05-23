import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeChallangeComponent } from './code-challange.component';

describe('CodeChallangeComponent', () => {
    let component: CodeChallangeComponent;
    let fixture: ComponentFixture<CodeChallangeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CodeChallangeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CodeChallangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
