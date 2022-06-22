-- public.questions definition

-- Drop table

-- DROP TABLE public.questions;

CREATE TABLE public.questions (
	body varchar(50) NOT NULL,
	asker_name varchar(50) NOT NULL,
	date_written varchar(50) NOT NULL,
	asker_email varchar(50) NOT NULL,
	reported bool NOT NULL,
	product_id int NOT NULL,
	helpful int NOT NULL,
	id varchar(50) NOT NULL,
	CONSTRAINT id PRIMARY KEY (id)
);

-- public.answers definition

-- Drop table

-- DROP TABLE public.answers;

CREATE TABLE public.answers (
	id int NOT NULL,
	body varchar(50) NOT NULL,
	date_written varchar(50) NOT NULL,
	answerer_name varchar(50) NOT NULL,
	helpful int NOT NULL,
	photos json,
	question_id int NOT NULL
	reported int NOT NULL
	answerer_email varchar(50) NOT NULL
	CONSTRAINT id PRIMARY KEY (id)
);

-- public.answers foreign keys
ALTER TABLE public.answers ADD CONSTRAINT answers_fk FOREIGN KEY (question_id) REFERENCES public.questions(id);

