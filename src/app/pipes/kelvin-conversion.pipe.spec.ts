import { KelvinConversionPipe } from './kelvin-conversion.pipe';

describe('KelvinConversionPipe', () => {
  it('create an instance', () => {
    const pipe = new KelvinConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
