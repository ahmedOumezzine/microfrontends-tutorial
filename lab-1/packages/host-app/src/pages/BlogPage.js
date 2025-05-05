import React, { Suspense, useState } from "react";

const ArticlesList = React.lazy(() =>
  import("ArticleListApp_Remote/ArticlesList")
);
const ArticleDetails = React.lazy(() =>
  import("ArticleDetailApp_Remote/ArticleDetails")
); 

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleSelected = (articleId) => {
    setSelectedArticle(articleId);
  };

  return (
    <main className="container py-4">
      <div className="row g-4">
        <Suspense fallback={<h1>Loading articles...</h1>}>
          <div className="col-md-4">
            <ArticlesList onArticleSelected={handleArticleSelected} />
          </div>
        </Suspense>
        <Suspense fallback={<h1>Loading article details...</h1>}>
          <div className="col-md-8">
            <ArticleDetails selectedArticleId={selectedArticle} />
          </div>
        </Suspense>
      </div>
    </main>
  );
}