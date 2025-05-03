import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: '<div>{{ value }}</div>',
})
class MockChildComponent {
  @Input() value: string = '';
}

describe('ParentComponent', () => {
  let parentComponent: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let childComponent: MockChildComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParentComponent],
    })
      .overrideComponent(ParentComponent, {
        set: {
          imports: [MockChildComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    parentComponent = fixture.componentInstance;
    fixture.detectChanges();

    childComponent = fixture.debugElement.query(
      By.directive(MockChildComponent)
    ).componentInstance as MockChildComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(parentComponent).toBeTruthy();
  });

  it('should pass the correct value to child component', () => {
    expect(childComponent.value).toBe('Parent Value');
  });

  it('should update child component when parent value changes', () => {
    parentComponent.parentValue = 'New Value';
    fixture.detectChanges();

    expect(childComponent.value).toEqual('New Value');
  });
});
