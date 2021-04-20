import { ByCNamePipe } from './by-cname.pipe';

describe('ByCNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ByCNamePipe();
    expect(pipe).toBeTruthy();
  });
});
