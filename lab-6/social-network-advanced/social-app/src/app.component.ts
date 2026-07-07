import { CommonModule } from '@angular/common';
import { Component, Type, signal } from '@angular/core';

export const remoteNames = ['postListApp', 'profileApp'];

type PostHistoryEntry = {
  author: string;
  text: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-dark bg-secondary"><div class="container"><span class="navbar-brand">Social App Advanced - Lab 6</span><span class="badge text-bg-light">{{ selectedAuthor() }}</span></div></nav>
    <main class="container py-4">
      <div class="alert alert-info">Article: Tests dans les Micro-Frontends.</div>
      <div class="row g-4">
        <section class="col-md-8"><ng-container *ngIf="postList()" [ngComponentOutlet]="postList()"></ng-container></section>
        <section class="col-md-4"><ng-container *ngIf="profile()" [ngComponentOutlet]="profile()"></ng-container></section>
      </div>
      <section *ngIf="postHistory().length > 0" class="mt-4" aria-label="Historique des consultations">
        <h2 class="h4">Historique des consultations</h2>
        <div class="table-responsive">
          <table class="table table-striped table-bordered align-middle mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Auteur</th>
                <th scope="col">Publication</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let entry of postHistory(); let index = index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ entry.author }}</td>
                <td>{{ entry.text }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  `,
})
export class AppComponent {
  postList = signal<Type<unknown> | null>(null);
  profile = signal<Type<unknown> | null>(null);
  selectedAuthor = signal('Aucune selection');
  postHistory = signal<PostHistoryEntry[]>([]);

  constructor() {
    import('postListApp/PostList').then((m) => this.postList.set(m.PostListComponent));
    import('profileApp/Profile').then((m) => this.profile.set(m.ProfileComponent));
    window.addEventListener('social:post-selected', ((event: CustomEvent<{ author: string; text: string }>) => {
      const post = event.detail;

      this.selectedAuthor.set(post.author);
      this.postHistory.update((current) => [...current, post]);
    }) as EventListener);
  }
}
