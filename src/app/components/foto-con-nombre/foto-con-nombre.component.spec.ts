import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoConNombreComponent } from './foto-con-nombre.component';

describe('FotoConNombreComponent', () => {
  let component: FotoConNombreComponent;
  let fixture: ComponentFixture<FotoConNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoConNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoConNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
