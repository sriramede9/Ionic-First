import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestonePage } from './testone.page';

describe('TestonePage', () => {
  let component: TestonePage;
  let fixture: ComponentFixture<TestonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
