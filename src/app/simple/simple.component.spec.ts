import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showMessage', () => {
    it('should initialize with default state', () => {
      expect(component.isMessage).toEqual(false);
      expect(component.color).toEqual('blue');
      expect(component.message).toEqual('');
    });

    it('should update the message when called', () => {
      component.showMessage();
      expect(component.message).toEqual('I am the new message');
    });

    it('should set isMessage to true when called', () => {
      component.showMessage();
      expect(component.isMessage).toEqual(true);
    });

    it('should change color to red when called', () => {
      component.showMessage();
      expect(component.color).toEqual('red');
    });

    it('should show the message in the DOM when button is clicked', () => {
      const button = fixture.nativeElement.querySelector('button');
      button.click();
      fixture.detectChanges();

      const messageElement = fixture.nativeElement.querySelector('p');

      expect(messageElement).toBeTruthy();
      expect(messageElement.textContent).toContain('I am the new message');
    });
  });
});
