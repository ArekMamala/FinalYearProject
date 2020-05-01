import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mealday3Page } from './mealday3.page';

describe('Mealday3Page', () => {
  let component: Mealday3Page;
  let fixture: ComponentFixture<Mealday3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealday3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mealday3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
