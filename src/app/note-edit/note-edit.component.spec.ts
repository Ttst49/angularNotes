import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditComponent } from './note-edit.component';

describe('NoteEditComponent', () => {
  let component: NoteEditComponent;
  let fixture: ComponentFixture<NoteEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoteEditComponent]
    });
    fixture = TestBed.createComponent(NoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
