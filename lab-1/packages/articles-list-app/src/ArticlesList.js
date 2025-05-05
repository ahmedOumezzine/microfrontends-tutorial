import React from "react";

const mockArticles = [
  { id: "1", title: "Mon premier article", summary: "Introduction au blogging..." },
  { id: "2", title: "React et Micro-Frontends", summary: "Exploration de Module Federation..." },
];

export default function ArticlesList({ onArticleSelected }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Articles</h2>
      </div>
      <ul className="list-group list-group-flush">
        {mockArticles.map((article) => (
          <li
            key={article.id}
            className="list-group-item list-group-item-action"
            onClick={() => onArticleSelected(article.id)}
            style={{ cursor: "pointer" }}
          >
            <h5>{article.title}</h5>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}