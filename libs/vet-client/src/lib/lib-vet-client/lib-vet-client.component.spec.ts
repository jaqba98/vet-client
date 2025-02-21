import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibVetClientComponent } from './lib-vet-client.component';

describe('LibVetClientComponent', () => {
  let component: LibVetClientComponent;
  let fixture: ComponentFixture<LibVetClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibVetClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibVetClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
