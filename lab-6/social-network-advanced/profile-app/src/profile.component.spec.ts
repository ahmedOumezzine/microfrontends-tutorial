import { profile } from './profile.component';

describe('profile remote', () => {
  it('shows the number of available tests', () => {
    expect(profile.tests).toBeGreaterThan(0);
  });
});
