import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicationPagePage } from './application-page.page';

describe('ApplicationPagePage', () => {
  let component: ApplicationPagePage;
  let fixture: ComponentFixture<ApplicationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
