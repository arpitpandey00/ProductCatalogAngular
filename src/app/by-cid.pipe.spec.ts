import { ByCIdPipe } from './by-cid.pipe';

describe('ByCIdPipe', () => {
  it('create an instance', () => {
    const pipe = new ByCIdPipe();
    expect(pipe).toBeTruthy();
  });
});
