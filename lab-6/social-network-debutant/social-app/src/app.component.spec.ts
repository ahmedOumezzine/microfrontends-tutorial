import { remoteNames } from './app.component';

describe('social host contract', () => {
  it('declares the two remote applications', () => {
    expect(remoteNames).toEqual(['postListApp', 'profileApp']);
  });
});
