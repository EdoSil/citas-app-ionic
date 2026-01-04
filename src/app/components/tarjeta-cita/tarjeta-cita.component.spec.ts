import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarjetaCitaComponent } from './tarjeta-cita.component';

//Pruebas unitarias para el componente TarjetaCitaComponent
describe('TarjetaCitaComponent', () => {
  let component: TarjetaCitaComponent;
  let fixture: ComponentFixture<TarjetaCitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TarjetaCitaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
