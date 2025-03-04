## API de gerenciamento de produtos

### :fire: Instruções para instalação e execução do projeto 

Faça o clone do repositório: https://github.com/TyroneAmorim/produtos-api.git

Entre na pasta do projeto

```
cd produtos-api
````

entre na pasta `docker`
 
 ```
 cd docker
 ```

 Faça o build das imagens: (docker ou podman)

 ```
docker-compose --file docker-compose.yml build
```

Após o build executar com sucesso, inicie os containers:

```
podman-compose up
```

Execute um shell dentro do container da API para gerar e executar as migrations, para popular o banco de dados com as tabelas necessárias:
```
docker -it exec api-produtos bash
```
Execute os seguintes comandos em seguida:

```
npm run generateMigration --name=TabelasBase

npm run runMigrations
```

Pronto! A API já estará pronta para interação.

Chame primeiro o endpoint de criação de usuário e depois o de login, para obter o token JWT e assim conseguir chamar os outros endpoints de forma autenticada.

Importe o arquivo de collection (`Api-Produtos.postman_collection.json`) para visualizar e interagir com os endpoints.

### :mag_right: Decisões técnicas

- :white_check_mark: Criação de migrations no lugar de um script genérico de criação de tabelas.
- :white_check_mark: Adoção de um design de camadas, para gerenciar as responsabilidades separadamente e com o mínimo de acoplamento.
- :white_check_mark: Utilização de JWT para autenticação.
- :white_check_mark: Utilização do `class-validator` para validação dos dados de entrada.

- :white_check_mark: O campo de `quantidade em estoque` foi definido como INT. Caso fosse definido como decimal, poderia englobar também outras unidades de medidas como KG, Litro, Metro e etc, o quê poderia resultar na necessidade de criação de outros campos para definir esses tipos, o quê traria uma complexidade não necessária para um projeto simples e inicial.