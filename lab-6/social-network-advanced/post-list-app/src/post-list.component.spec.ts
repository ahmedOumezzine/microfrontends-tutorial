import { posts } from './post-list.component';

describe('posts remote', () => {
  it('contains social posts to render', () => {
    expect(posts.length).toBeGreaterThan(1);
  });
});
