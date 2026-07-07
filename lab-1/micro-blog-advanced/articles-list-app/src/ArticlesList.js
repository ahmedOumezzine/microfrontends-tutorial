import React, { useMemo, useState } from "react";

const mockArticles = [
  {
    id: "1",
    title: "Mon premier article",
    summary: "Poser les bases d'un blog simple, lisible et evolutif.",
    category: "Design",
    readTime: "4 min",
    author: "Sarah",
    status: "Publie",
  },
  {
    id: "2",
    title: "React et Micro-Frontends",
    summary: "Comprendre comment Module Federation assemble des remotes.",
    category: "Architecture",
    readTime: "7 min",
    author: "Ahmed",
    status: "Vedette",
  },
  {
    id: "3",
    title: "Deployer une remote sans bloquer le host",
    summary: "Organiser les releases et reduire le couplage entre equipes.",
    category: "DevOps",
    readTime: "6 min",
    author: "Nadia",
    status: "Brouillon",
  },
];

const categories = ["Tous", ...new Set(mockArticles.map((article) => article.category))];

export default function ArticlesList({ onArticleSelected = () => {}, selectedArticleId = "1" }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return mockArticles.filter((article) => {
      const matchesCategory = category === "Tous" || article.category === category;
      const matchesQuery =
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.summary.toLowerCase().includes(normalizedQuery) ||
        article.author.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section className="bg-white border rounded-3 shadow-sm overflow-hidden">
      <div className="p-4 border-bottom">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <p className="text-uppercase text-primary fw-semibold small mb-1">Remote : 9011</p>
            <h2 className="h4 fw-bold mb-0">Articles</h2>
          </div>
          <span className="badge text-bg-light border">{filteredArticles.length} resultat(s)</span>
        </div>

        <label className="form-label small fw-semibold" htmlFor="article-search">
          Recherche
        </label>
        <input
          id="article-search"
          className="form-control"
          type="search"
          placeholder="Titre, auteur ou resume..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="d-flex flex-wrap gap-2 mt-3" aria-label="Categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`btn btn-sm ${category === item ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="list-group list-group-flush">
        {filteredArticles.map((article) => {
          const isSelected = article.id === selectedArticleId;

          return (
            <button
              key={article.id}
              type="button"
              className={`list-group-item list-group-item-action text-start p-4 ${
                isSelected ? "active" : ""
              }`}
              onClick={() => onArticleSelected(article.id)}
            >
              <div className="d-flex justify-content-between gap-3 mb-2">
                <span className={`badge ${isSelected ? "text-bg-light" : "text-bg-primary"}`}>
                  {article.category}
                </span>
                <span className={isSelected ? "text-white-50 small" : "text-secondary small"}>
                  {article.readTime}
                </span>
              </div>
              <h3 className="h6 fw-bold mb-2">{article.title}</h3>
              <p className={`mb-3 small ${isSelected ? "text-white-50" : "text-secondary"}`}>
                {article.summary}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span className={isSelected ? "text-white-50 small" : "text-secondary small"}>
                  Par {article.author}
                </span>
                <span className={`badge rounded-pill ${isSelected ? "text-bg-light" : "text-bg-light border"}`}>
                  {article.status}
                </span>
              </div>
            </button>
          );
        })}

        {filteredArticles.length === 0 && (
          <div className="p-4 text-center text-secondary">
            Aucun article ne correspond a votre recherche.
          </div>
        )}
      </div>
    </section>
  );
}
