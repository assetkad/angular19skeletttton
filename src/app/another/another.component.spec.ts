import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponent } from './another.component';
import { MySuperService } from './my-super.service';
import { By } from '@angular/platform-browser';

describe('AnotherComponent', () => {
  let component: AnotherComponent;
  let fixture: ComponentFixture<AnotherComponent>;

  const mockMySuperService = {
    getMessage: jest.fn().mockReturnValue('Super message'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnotherComponent],
      providers: [{ provide: MySuperService, useValue: mockMySuperService }],
    });
    fixture = TestBed.createComponent(AnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('showMessage', () => {
    it('should show the message', () => {
      expect(mockMySuperService.getMessage).not.toHaveBeenCalled();
      expect(component.message).toBe('');
      component.showMessage();
      expect(mockMySuperService.getMessage).toHaveBeenCalledTimes(1);
      expect(component.message).toBe('Super message');
    });

    it('should display message in template', () => {
      component.showMessage();
      fixture.detectChanges();

      const messageEl = fixture.debugElement.query(By.css('p.message'));
      expect(messageEl.nativeElement.textContent).toContain('Super message');
    });
  });
});
