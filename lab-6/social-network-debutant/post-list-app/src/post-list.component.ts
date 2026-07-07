import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

export const posts = [
  { author: 'Nadia', text: 'Les tests de contrats securisent les remotes.' },
  { author: 'Omar', text: 'Un build vert par micro-frontend evite les regressions.' },
];

@Component({
  selector: 'post-list-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header"><h2 class="h4 mb-0">Publications</h2></div>
      <div class="list-group list-group-flush">
        <button type="button" class="list-group-item list-group-item-action text-start" [class.active]="selectedAuthor() === post.author" *ngFor="let post of posts" (click)="selectPost(post)">
          <strong>{{ post.author }}</strong>
          <p class="mb-0">{{ post.text }}</p>
        </button>
      </div>
    </div>
  `,
})
export class PostListComponent {
  posts = posts;
  selectedAuthor = signal('');

  selectPost(post: { author: string; text: string }) {
    this.selectedAuthor.set(post.author);
    window.dispatchEvent(new CustomEvent('social:post-selected', { detail: post }));
  }
}
