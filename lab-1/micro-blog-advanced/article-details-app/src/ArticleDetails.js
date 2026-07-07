import React from "react";

const mockDetails = {
  "1": {
    id: "1",
    title: "Mon premier article",
    kicker: "Design editorial",
    content:
      "Un blog efficace commence par une experience de lecture claire : un titre fort, un resume utile et une hierarchie visuelle qui aide le lecteur a scanner rapidement.",
    date: "2023-10-01",
    author: "Sarah",
    readTime: "4 min",
    category: "Design",
    tags: ["Bootstrap", "UX", "React"],
    checklist: ["Structure lisible", "Cartes responsives", "Etat de selection visible"],
  },
  "2": {
    id: "2",
    title: "React et Micro-Frontends",
    kicker: "Architecture front-end",
    content:
      "Module Federation permet de composer une interface a partir d'applications independantes. Le host conserve l'etat commun, puis transmet les informations utiles aux remotes.",
    date: "2023-09-15",
    author: "Ahmed",
    readTime: "7 min",
    category: "Architecture",
    tags: ["Webpack", "Module Federation", "Remote"],
    checklist: [
      "Host responsable de l'orchestration",
      "Remotes chargees a l'execution",
      "React partage entre applications",
    ],
  },
  "3": {
    id: "3",
    title: "Deployer une remote sans bloquer le host",
    kicker: "DevOps micro-frontend",
    content:
      "Une remote peut evoluer avec son propre cycle de livraison si le contrat public reste stable. Cette separation reduit les risques et facilite le travail par equipe.",
    date: "2023-11-08",
    author: "Nadia",
    readTime: "6 min",
    category: "DevOps",
    tags: ["CI/CD", "Contrat", "Release"],
    checklist: ["Versionner les contrats", "Surveiller le remoteEntry", "Prevoir un etat de chargement"],
  },
};

export default function ArticleDetails({ selectedArticleId = "1" }) {
  const article = mockDetails[selectedArticleId];

  return (
    <section className="bg-white border rounded-3 shadow-sm overflow-hidden">
      <div className="p-4 p-lg-5 border-bottom bg-dark text-white">
        <div className="d-flex flex-wrap justify-content-between gap-3 mb-4">
          <span className="badge text-bg-info">Remote : 9012</span>
          <span className="text-white-50 small">Detail synchronise depuis le host</span>
        </div>
        {article ? (
          <>
            <p className="text-uppercase text-info fw-semibold small mb-2">{article.kicker}</p>
            <h2 className="display-6 fw-bold mb-3">{article.title}</h2>
            <p className="lead text-white-50 mb-0">{article.content}</p>
          </>
        ) : (
          <>
            <p className="text-uppercase text-info fw-semibold small mb-2">Aucun article</p>
            <h2 className="display-6 fw-bold mb-3">Selectionnez un article</h2>
            <p className="lead text-white-50 mb-0">
              Le panneau de detail attend un identifiant transmis par la liste.
            </p>
          </>
        )}
      </div>

      {article && (
        <div className="p-4 p-lg-5">
          <div className="row g-4 mb-4">
            <div className="col-sm-4">
              <div className="border rounded-3 p-3 h-100">
                <div className="text-secondary small">Auteur</div>
                <div className="fw-semibold">{article.author}</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border rounded-3 p-3 h-100">
                <div className="text-secondary small">Publication</div>
                <div className="fw-semibold">{article.date}</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border rounded-3 p-3 h-100">
                <div className="text-secondary small">Lecture</div>
                <div className="fw-semibold">{article.readTime}</div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-7">
              <h3 className="h5 fw-bold mb-3">Points cles du lab</h3>
              <ul className="list-group">
                {article.checklist.map((item) => (
                  <li key={item} className="list-group-item d-flex align-items-center gap-2">
                    <span className="badge text-bg-success rounded-pill">OK</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5">
              <h3 className="h5 fw-bold mb-3">Meta donnees</h3>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="badge text-bg-light border">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="alert alert-primary mb-0">
                Le host ne connait que l'id selectionne. Le contenu detaille reste
                encapsule dans la remote.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
