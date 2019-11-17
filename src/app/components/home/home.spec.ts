import {TestBed, async} from "@angular/core/testing";
import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
    // suite of tests here

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
        }).compileComponents();
    });

    it('should do some stuff', async(() => {
        // this is the body of the test
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.debugElement.componentInstance;
        // test stuff here
        expect(component).toBeTruthy();
    }));
});

