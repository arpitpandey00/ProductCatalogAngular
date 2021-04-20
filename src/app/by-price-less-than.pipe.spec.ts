import { ByPriceLessThanPipe } from './by-price-less-than.pipe';

describe('ByPriceLessThanPipe', () => {
  it('create an instance', () => {
    const pipe = new ByPriceLessThanPipe();
    expect(pipe).toBeTruthy();
  });
});
