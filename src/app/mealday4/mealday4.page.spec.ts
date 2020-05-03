import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mealday4Page } from './mealday4.page';

describe('Mealday4Page', () => {
  let component: Mealday4Page;
  let fixture: ComponentFixture<Mealday4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealday4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mealday4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
