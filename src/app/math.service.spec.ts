import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    service = new MathService();
  });

  it('должен складывать два числа', () => {
    expect(service.add(2, 3)).toBe(5);
  });

  it('должен делить два числа', () => {
    expect(service.divide(10, 2)).toBe(5);
  });

  it('должен выбрасывать ошибку при делении на ноль', () => {
    expect(() => service.divide(10, 0)).toThrow('Division by zero');
  });
});
