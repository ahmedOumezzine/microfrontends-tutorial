import React, { Suspense, useState } from "react";

const ArticlesList = React.lazy(() => import("articlesListApp/ArticlesList"));
const ArticleDetails = React.lazy(() => import("articleDetailsApp/ArticleDetails"));

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState("1");

  const handleArticleSelected = (articleId) => {
    setSelectedArticle(articleId);
  };

  return (
    <main className="bg-body-tertiary min-vh-100">
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container py-2">
          <a className="navbar-brand fw-bold text-primary" href="/">
            Micro Blog
          </a>
          <div className="d-flex align-items-center gap-2">
            <span className="badge text-bg-light border">Host : 9010</span>
            <span className="badge text-bg-primary">Module Federation</span>
          </div>
        </div>
      </nav>

      <section className="container py-4 py-lg-5">
        <div className="row align-items-center g-4 mb-4">
          <div className="col-lg-7">
            <p className="text-uppercase text-primary fw-semibold small mb-2">
              Lab 1 - React micro-frontends
            </p>
            <h1 className="display-6 fw-bold mb-3">
              Blog collaboratif compose par trois applications independantes.
            </h1>
            <p className="lead text-secondary mb-0">
              Le host orchestre la selection d'article pendant que chaque remote
              reste autonome, deployable et testable separement.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="row g-3">
              <div className="col-6">
                <div className="bg-white border rounded-3 p-3 h-100">
                  <div className="fs-3 fw-bold text-primary">3</div>
                  <div className="text-secondary small">applications React</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-white border rounded-3 p-3 h-100">
                  <div className="fs-3 fw-bold text-success">2</div>
                  <div className="text-secondary small">remotes exposees</div>
                </div>
              </div>
              <div className="col-12">
                <div className="bg-dark text-white rounded-3 p-3">
                  <div className="d-flex justify-content-between small mb-2">
                    <span>Host</span>
                    <span>Articles List + Article Details</span>
                  </div>
                  <div className="progress" role="progressbar" aria-label="Flux micro-frontends">
                    <div className="progress-bar bg-info" style={{ width: "66%" }}>
                      remoteEntry.js
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-4">
            <Suspense fallback={<RemoteLoading title="Chargement des articles" />}>
              <ArticlesList
                onArticleSelected={handleArticleSelected}
                selectedArticleId={selectedArticle}
              />
            </Suspense>
          </div>
          <div className="col-lg-8">
            <Suspense fallback={<RemoteLoading title="Chargement du detail" />}>
              <ArticleDetails selectedArticleId={selectedArticle} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}

function RemoteLoading({ title }) {
  return (
    <div className="bg-white border rounded-3 p-4 shadow-sm">
      <div className="d-flex align-items-center gap-3">
        <div className="spinner-border text-primary" role="status" aria-hidden="true" />
        <div>
          <div className="fw-semibold">{title}</div>
          <div className="text-secondary small">Connexion a la remote...</div>
        </div>
      </div>
    </div>
  );
}
