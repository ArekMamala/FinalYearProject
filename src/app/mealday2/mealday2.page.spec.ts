import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mealday2Page } from './mealday2.page';

describe('Mealday2Page', () => {
  let component: Mealday2Page;
  let fixture: ComponentFixture<Mealday2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealday2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mealday2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
