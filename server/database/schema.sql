CREATE TABLE projet (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titre VARCHAR(150) NOT NULL,
  description TEXT,
  image_url VARCHAR(255) NOT NULL,
  lien_site VARCHAR(255),
  lien_github VARCHAR(255) NOT NULL
);

CREATE TABLE skill (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(100)
);

CREATE TABLE projet_skill (
  projet_id INT,
  skill_id INT,
  PRIMARY KEY (projet_id, skill_id),
  FOREIGN KEY(projet_id) REFERENCES projet(id),
  FOREIGN KEY(skill_id) REFERENCES skill(id)
);




