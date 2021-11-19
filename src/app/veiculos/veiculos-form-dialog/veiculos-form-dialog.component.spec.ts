import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosFormDialogComponent } from './veiculos-form-dialog.component';

describe('VeiculosFormDialogComponent', () => {
  let component: VeiculosFormDialogComponent;
  let fixture: ComponentFixture<VeiculosFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
