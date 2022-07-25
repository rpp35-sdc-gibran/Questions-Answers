-- public.questions definition

-- Drop table

-- DROP TABLE public.questions;

CREATE TABLE questions (
	body varchar(250) NOT NULL,
	asker_name varchar(150) NOT NULL,
	date_written varchar(150) NOT NULL,
	asker_email varchar(150) NOT NULL,
	reported bool NOT NULL,
	product_id int NOT NULL,
	helpful int NOT NULL,
	id varchar(150) NOT NULL,
	CONSTRAINT id PRIMARY KEY (id)
);

-- public.answers definition
CREATE TABLE photos (
	id int NOT NULL,
	url varchar(200) NOT NULL,
	answer_id int NOT NULL
)
-- Drop table

-- DROP TABLE public.answers;

CREATE TABLE answers (
	id int NOT NULL,
	body varchar(150) NOT NULL,
	date_written varchar(150) NOT NULL,
	answerer_name varchar(150) NOT NULL,
	helpful int NOT NULL,
	photos json,
	question_id int NOT NULL,
	reported int NOT NULL,
	answerer_email varchar(150) NOT NULL
);

-- public.answers foreign keys
ALTER TABLE answers ADD CONSTRAINT answers_fk FOREIGN KEY (question_id) REFERENCES questions(id);

