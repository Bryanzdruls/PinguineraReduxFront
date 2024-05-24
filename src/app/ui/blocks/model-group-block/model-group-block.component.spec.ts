import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelGroupBlockComponent } from './model-group-block.component';

describe('ModelGroupBlockComponent', () => {
  let component: ModelGroupBlockComponent;
  let fixture: ComponentFixture<ModelGroupBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelGroupBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelGroupBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
