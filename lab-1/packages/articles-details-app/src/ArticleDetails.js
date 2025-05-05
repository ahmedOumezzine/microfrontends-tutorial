import React from "react";

const mockDetails = {
  "1": {
    id: "1",
    title: "Mon premier article",
    content: "Ceci est mon premier article sur le blogging. Bienvenue !",
    date: "2023-10-01",
  },
  "2": {
    id: "2",
    title: "React et Micro-Frontends",
    content: "Module Federation permet de créer des applications modulaires...",
    date: "2023-09-15",
  },
};

export default function ArticleDetails({ selectedArticleId }) {
  const article = mockDetails[selectedArticleId];

  return (
    <div className="card">
      <div className="card-header">
        <h2>Détails de l'article</h2>
      </div>
      <div className="card-body">
        {article ? (
          <>
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.content}</p>
            <p className="card-text">
              <small className="text-muted">Publié le {article.date}</small>
            </p>
          </>
        ) : (
          <p className="card-text">Sélectionnez un article pour voir les détails.</p>
        )}
      </div>
    </div>
  );
}