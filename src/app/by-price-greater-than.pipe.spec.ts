import { ByPriceGreaterThanPipe } from './by-price-greater-than.pipe';

describe('ByPriceGreaterThanPipe', () => {
  it('create an instance', () => {
    const pipe = new ByPriceGreaterThanPipe();
    expect(pipe).toBeTruthy();
  });
});
