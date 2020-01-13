import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevelopersPage } from './developers.page';

describe('DevelopersPage', () => {
  let component: DevelopersPage;
  let fixture: ComponentFixture<DevelopersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevelopersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
