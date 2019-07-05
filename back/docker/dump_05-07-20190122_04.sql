--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases
--

DROP DATABASE tadpgweb;




--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md5e8a48653851e28c69d0506508fb27fc5';






--
-- Database creation
--

CREATE DATABASE tadpgweb WITH TEMPLATE = template0 OWNER = postgres;
REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


\connect postgres

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.14
-- Dumped by pg_dump version 9.6.14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- PostgreSQL database dump complete
--

\connect tadpgweb

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.14
-- Dumped by pg_dump version 9.6.14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: zoo; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA zoo;


ALTER SCHEMA zoo OWNER TO postgres;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ala; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.ala (
    num_ala bigint NOT NULL,
    classe bigint
);


ALTER TABLE zoo.ala OWNER TO postgres;

--
-- Name: alimento; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.alimento (
    id bigint NOT NULL,
    nome character varying,
    fornecedor bigint NOT NULL
);


ALTER TABLE zoo.alimento OWNER TO postgres;

--
-- Name: animais; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.animais (
    id bigint NOT NULL,
    nome character varying,
    classe bigint NOT NULL,
    alimento bigint NOT NULL,
    container bigint NOT NULL,
    especie character varying,
    altura character varying,
    peso character varying,
    responsavel bigint,
    foto_animal bytea
);


ALTER TABLE zoo.animais OWNER TO postgres;

--
-- Name: classe; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.classe (
    id bigint NOT NULL,
    nome_da_classe character varying NOT NULL,
    descricao character varying
);


ALTER TABLE zoo.classe OWNER TO postgres;

--
-- Name: aves; Type: VIEW; Schema: zoo; Owner: postgres
--

CREATE VIEW zoo.aves AS
 SELECT a.nome,
    ala.num_ala
   FROM ((zoo.animais a
     JOIN zoo.classe c ON ((c.id = a.classe)))
     JOIN zoo.ala ala ON ((ala.classe = c.id)))
  WHERE ((c.nome_da_classe)::text ~~* 'Aves'::text);


ALTER TABLE zoo.aves OWNER TO postgres;

--
-- Name: cargo; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.cargo (
    id bigint NOT NULL,
    nome_cargo character varying,
    salario integer
);


ALTER TABLE zoo.cargo OWNER TO postgres;

--
-- Name: consulta; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.consulta (
    id bigint NOT NULL,
    data date,
    funcionario bigint NOT NULL,
    animal bigint
);


ALTER TABLE zoo.consulta OWNER TO postgres;

--
-- Name: container; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.container (
    id bigint NOT NULL,
    tipo character varying,
    ala bigint
);


ALTER TABLE zoo.container OWNER TO postgres;

--
-- Name: endereco; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.endereco (
    id bigint NOT NULL,
    rua character varying,
    numero character varying,
    bairro character varying,
    cep character varying,
    uf character varying
);


ALTER TABLE zoo.endereco OWNER TO postgres;

--
-- Name: fornecedores; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.fornecedores (
    id bigint NOT NULL,
    nome character varying,
    endereco bigint
);


ALTER TABLE zoo.fornecedores OWNER TO postgres;

--
-- Name: funcionarios; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.funcionarios (
    matricula bigint NOT NULL,
    nome character varying,
    escolaridade character varying,
    cargo bigint NOT NULL,
    rg character varying,
    cpf character varying,
    crmv character varying,
    endereco bigint,
    data_nascimento date
);


ALTER TABLE zoo.funcionarios OWNER TO postgres;

--
-- Name: limpeza; Type: TABLE; Schema: zoo; Owner: postgres
--

CREATE TABLE zoo.limpeza (
    funcionario bigint NOT NULL,
    container bigint NOT NULL,
    data date NOT NULL
);


ALTER TABLE zoo.limpeza OWNER TO postgres;

--
-- Name: mamiferos; Type: VIEW; Schema: zoo; Owner: postgres
--

CREATE VIEW zoo.mamiferos AS
 SELECT a.nome,
    ala.num_ala
   FROM ((zoo.animais a
     JOIN zoo.classe c ON ((c.id = a.classe)))
     JOIN zoo.ala ala ON ((ala.classe = c.id)))
  WHERE ((c.nome_da_classe)::text ~~* 'Mamifero'::text);


ALTER TABLE zoo.mamiferos OWNER TO postgres;

--
-- Name: peixes; Type: VIEW; Schema: zoo; Owner: postgres
--

CREATE VIEW zoo.peixes AS
 SELECT a.nome,
    ala.num_ala
   FROM ((zoo.animais a
     JOIN zoo.classe c ON ((c.id = a.classe)))
     JOIN zoo.ala ala ON ((ala.classe = c.id)))
  WHERE ((c.nome_da_classe)::text ~~* 'Peixes'::text);


ALTER TABLE zoo.peixes OWNER TO postgres;

--
-- Name: repteis; Type: VIEW; Schema: zoo; Owner: postgres
--

CREATE VIEW zoo.repteis AS
 SELECT a.nome,
    ala.num_ala
   FROM ((zoo.animais a
     JOIN zoo.classe c ON ((c.id = a.classe)))
     JOIN zoo.ala ala ON ((ala.classe = c.id)))
  WHERE ((c.nome_da_classe)::text ~~* 'Repteis'::text);


ALTER TABLE zoo.repteis OWNER TO postgres;

--
-- Data for Name: ala; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.ala (num_ala, classe) FROM stdin;
1	1
\.


--
-- Data for Name: alimento; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.alimento (id, nome, fornecedor) FROM stdin;
2	doggie	1
3	doggie	1
4	Roggie	1
\.


--
-- Data for Name: animais; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.animais (id, nome, classe, alimento, container, especie, altura, peso, responsavel, foto_animal) FROM stdin;
1	Urias	1	4	1	Humano	1,72	100kg	12	\N
4	doggie	1	2	1	cavalo	1,90	90kg	12	\N
3	DOGÃO	1	2	1	cavalo	1,90	90kg	12	\N
2	OI	1	2	1	oi	12	11	12	\N
\.


--
-- Data for Name: cargo; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.cargo (id, nome_cargo, salario) FROM stdin;
1	Dono	1111111
\.


--
-- Data for Name: classe; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.classe (id, nome_da_classe, descricao) FROM stdin;
1	Mamifero	Mama leite
\.


--
-- Data for Name: consulta; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.consulta (id, data, funcionario, animal) FROM stdin;
\.


--
-- Data for Name: container; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.container (id, tipo, ala) FROM stdin;
1	Jaula	1
\.


--
-- Data for Name: endereco; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.endereco (id, rua, numero, bairro, cep, uf) FROM stdin;
1	2131	12	21212	12313	212
\.


--
-- Data for Name: fornecedores; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.fornecedores (id, nome, endereco) FROM stdin;
1	2131	1
\.


--
-- Data for Name: funcionarios; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.funcionarios (matricula, nome, escolaridade, cargo, rg, cpf, crmv, endereco, data_nascimento) FROM stdin;
12	Rogério	Superior	1	333333	222222222	111111	1	1995-09-15
\.


--
-- Data for Name: limpeza; Type: TABLE DATA; Schema: zoo; Owner: postgres
--

COPY zoo.limpeza (funcionario, container, data) FROM stdin;
\.


--
-- Name: ala ala_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.ala
    ADD CONSTRAINT ala_pk PRIMARY KEY (num_ala);


--
-- Name: alimento alimento_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.alimento
    ADD CONSTRAINT alimento_pk PRIMARY KEY (id);


--
-- Name: animais animais_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.animais
    ADD CONSTRAINT animais_pk PRIMARY KEY (id);


--
-- Name: consulta consulta_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.consulta
    ADD CONSTRAINT consulta_pk PRIMARY KEY (id);


--
-- Name: endereco endereco_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.endereco
    ADD CONSTRAINT endereco_pk PRIMARY KEY (id);


--
-- Name: classe especie_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.classe
    ADD CONSTRAINT especie_pk PRIMARY KEY (id);


--
-- Name: fornecedores fornecedores_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.fornecedores
    ADD CONSTRAINT fornecedores_pk PRIMARY KEY (id);


--
-- Name: funcionarios funcionarios_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.funcionarios
    ADD CONSTRAINT funcionarios_pk PRIMARY KEY (matricula);


--
-- Name: container habitat_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.container
    ADD CONSTRAINT habitat_pk PRIMARY KEY (id);


--
-- Name: limpeza limpeza_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.limpeza
    ADD CONSTRAINT limpeza_pk PRIMARY KEY (funcionario, container, data);


--
-- Name: cargo tipo_funcionarios_pk; Type: CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.cargo
    ADD CONSTRAINT tipo_funcionarios_pk PRIMARY KEY (id);


--
-- Name: ala ala_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.ala
    ADD CONSTRAINT ala_fk FOREIGN KEY (classe) REFERENCES zoo.classe(id);


--
-- Name: alimento alimento_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.alimento
    ADD CONSTRAINT alimento_fk FOREIGN KEY (fornecedor) REFERENCES zoo.fornecedores(id);


--
-- Name: animais animais_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.animais
    ADD CONSTRAINT animais_fk FOREIGN KEY (alimento) REFERENCES zoo.alimento(id);


--
-- Name: animais animais_fk_1; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.animais
    ADD CONSTRAINT animais_fk_1 FOREIGN KEY (classe) REFERENCES zoo.classe(id);


--
-- Name: animais animais_fk_2; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.animais
    ADD CONSTRAINT animais_fk_2 FOREIGN KEY (container) REFERENCES zoo.container(id);


--
-- Name: animais animais_fk_responsavel; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.animais
    ADD CONSTRAINT animais_fk_responsavel FOREIGN KEY (responsavel) REFERENCES zoo.funcionarios(matricula);


--
-- Name: consulta consulta_animal_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.consulta
    ADD CONSTRAINT consulta_animal_fk FOREIGN KEY (animal) REFERENCES zoo.animais(id);


--
-- Name: consulta consulta_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.consulta
    ADD CONSTRAINT consulta_fk FOREIGN KEY (funcionario) REFERENCES zoo.funcionarios(matricula);


--
-- Name: container container_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.container
    ADD CONSTRAINT container_fk FOREIGN KEY (ala) REFERENCES zoo.ala(num_ala);


--
-- Name: fornecedores fornecedores_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.fornecedores
    ADD CONSTRAINT fornecedores_fk FOREIGN KEY (endereco) REFERENCES zoo.endereco(id);


--
-- Name: funcionarios funcionarios_enderecofk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.funcionarios
    ADD CONSTRAINT funcionarios_enderecofk FOREIGN KEY (endereco) REFERENCES zoo.endereco(id);


--
-- Name: funcionarios funcionarios_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.funcionarios
    ADD CONSTRAINT funcionarios_fk FOREIGN KEY (cargo) REFERENCES zoo.cargo(id);


--
-- Name: limpeza limpeza_fk; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.limpeza
    ADD CONSTRAINT limpeza_fk FOREIGN KEY (funcionario) REFERENCES zoo.funcionarios(matricula);


--
-- Name: limpeza limpeza_fk_1; Type: FK CONSTRAINT; Schema: zoo; Owner: postgres
--

ALTER TABLE ONLY zoo.limpeza
    ADD CONSTRAINT limpeza_fk_1 FOREIGN KEY (container) REFERENCES zoo.container(id);


--
-- PostgreSQL database dump complete
--

\connect template1

SET default_transaction_read_only = off;

--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.14
-- Dumped by pg_dump version 9.6.14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

