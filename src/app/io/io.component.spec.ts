import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoComponent } from './io.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-host',
  imports: [IoComponent],
  template: ` <app-io
    [color]="hostColor"
    (colorChange)="onColorChanged($event)"
  >
  </app-io>`,
})
class HostComponent {
  @ViewChild(IoComponent) ioComponent!: IoComponent;
  hostColor = 'red';
  emittedColor = '';
  onColorChanged(color: string) {
    this.emittedColor = color;
  }
}

describe('IoComponent', () => {
  let hostComponent: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IoComponent, HostComponent],
    });
    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent.ioComponent).toBeTruthy();
  });

  describe('Input binding', () => {
    it('should receive initial color from host', () => {
      expect(hostComponent.ioComponent.color).toBe('red');
    });

    it('should update when host changes color', () => {
      hostComponent.hostColor = 'blue';
      hostFixture.detectChanges();
      expect(hostComponent.ioComponent.color).toBe('blue');
    });
  });

  describe('Output binding', () => {
    it('should emit new color when button clicked', () => {
      const button = hostFixture.nativeElement.querySelector('button');
      button.click();
      expect(hostComponent.emittedColor).toBe('pink');
    });

    it('should emit through direct component call', () => {
      const spy = jest.spyOn(hostComponent.ioComponent.colorChange, 'emit');
      hostComponent.ioComponent.changeColor();
      expect(spy).toHaveBeenCalledWith('pink');
    });
  });
});
