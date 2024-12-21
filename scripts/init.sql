CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  release_date DATE NOT NULL,
  poster_url VARCHAR(2083) DEFAULT NULL
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE movies_categories (
  movie_id INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (movie_id, category_id),
  FOREIGN KEY (movie_id) REFERENCES movies(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Datos iniciales
INSERT INTO movies (title, description, release_date, poster_url)
VALUES
  ('Inception', 'A mind-bending thriller', '2010-07-16', NULL),
  ('The Dark Knight', 'A superhero crime drama', '2008-07-18', NULL),
  ('Interstellar', 'A space exploration saga', '2014-11-07', NULL),
  ('The Matrix', 'A hacker discovers reality', '1999-03-31', NULL),
  ('Gladiator', 'A Roman general seeks revenge', '2000-05-05', NULL);

INSERT INTO categories (name) VALUES
  ('Sci-Fi'),
  ('Drama'),
  ('Action'),
  ('Adventure');

INSERT INTO movies_categories (movie_id, category_id) VALUES
  (1, 1),
  (2, 3),
  (2, 2),
  (3, 1),
  (3, 4),
  (4, 1),
  (5, 2),
  (5, 4);