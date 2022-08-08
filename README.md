# Doar computadores

Processo seletivo [App Masters](https://www.appmasters.io/pt).

## Objetivo

Criar uma API para doação de computadores e aparelhos eletrônicos utilizando nodejs.
Link para a [API](https://aleks-doar-compautadores.herokuapp.com/)

## Como funciona

Uma pessoa precisa doar computadores, e a parte do backend deste desafio tem que registrar a doação e guardar esses dados.
Dados necessários a seguir:

    {
      name: string;
      email?: string,
      phone: string,
      zip: string,
      city: string,
      state: string,
      streetAddress: string,
      number: string,
      complement?: string,
      neighborhood: string,
      deviceCount: number,
      [
        {
          type: string;
          condition: string;
        }
      ]
    }

Email e complemento são campos opcionais.

## Desenvolvimento

### Tecnologias usadas

- [Typeorm](typeorm.io): O typeorm é um Object-relational Mapping que mapeia classes para tabelas no banco de dados, além de facilitar as requisições que podem ser feitas sem código SQL.

- Typescript, Nodejs e Express: O conjunto de ferramentas básicas para construção de backend em node.

- [Heroku](https://devcenter.heroku.com/): plataforma para fazer o deploy da aplicação e também foi onde o banco de dados foi criado. O heroku fornece um banco de dados que pode ser usado sem dificuldades como se fosse o postgress.

#### Banco de dados

Por pouco conhecimento com o typeorm, as tabelas foram criadas com comandos SQL. E as classes descritas a seguir mapeiam objetos diretamente para as tabelas.

      CREATE TABLE users(
        id VARCHAR PRIMARY KEY,
        name VARCHAR NOT NULL,
        email VARCHAR UNIQUE IS NULL,
        phone VARCHAR UNIQUE NOT NULL,
        zip VARCHAR NOT NULL,
        city VARCHAR NOT NULL,
        state VARCHAR NOT NULL,
        streetaddress NOT NULL,
        number NOT NULL,
        complement IS NULL,
        neighborhood NOT NULL
      );

      CREATE TABLE donations(
          id VARCHAR PRIMARY KEY,
          userId VARCHAR,
          created_at DATE,
          FOREIGN KEY (userId) REFERENCES users(id)
      );

      CREATE TABLE devices(
        id VARCHAR PRIMARY KEY,
          donationid VARCHAR,
          type VARCHAR NOT NULL,
          condition VARCHAR NOT NULL,
          FOREIGN KEY (donationid) REFERENCES donations(id)
      );

- Users

        {
          id,
          name,
          email?,
          phone,
          zip,
          city,
          state,
          streetAddress,
          number,
          complement?,
          neighborhood,
        }

- Doações

        {
          id,
          userId,
          quantity,
          created_at
        }

  Uma doação faz referência à um usuário por meio de uma chave estrangeira e também registra a data que a doação foi feita e a quantidade de items doados.

- Aparelhos

        {
          id,
          type,
          condition,
          donationId
        }

  Cada aparelho que é armazenado no banco de dados tem referência por meio de chave estrangeira para para a sua respectiva doação.

#### Rodando a aplicação

Para rodar localmente foi utilizado o `heroku cli` que simula o ambiente de deploy e carrega as variáveis de ambiente em `.env`, portanto o comando

    npm run dev

Não irá funcionar pois a variável de ambiente não está no repositório por questões de segurança do projeto.

Mas os testes estão automatizados e podem ser feitos sem a conexão com o banco de dados. Basta rodar o comando

    npm run test
