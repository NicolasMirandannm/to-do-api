Integrantes do projeto:
    -Nicolas Leonardo Miranda Lima
    -Wesley Leonardo da Silva
    -Eliel Lima Aguiar
    -Vinicius Oliveira Lopes

Descrição do projeto
    O trabalho foi realizado como parte de uma avaliação do curso de Programação para web.
    O tema escolhido foi o To-Do Appl. A linguagem escolhida para este projeto foi node js, mais especificamente 
    typescript para o projeto back-end e react js para aplicação front-end, e um banco de dados local postgres.
    O projeto consta com uma API com end points simples para o CRUD de tarefas e listas.

Tecnologias utilizadas no back-end:
    -Docker
    -Node js
    -Typescript
    -Prisma
    -Postgresql

Pré-requisitos para rodar o projeto back-end:
    Para rodar o projeto é fundamental que possua docker instalado, pois o banco de dados postgres
    é um container que roda a partir de uma imagem do Dockerhub, ou seja, sem o docker não é possivel rodar o script 
    de start do projeto. Alem do docker, tambem é necessario que o node esteja instalado.

Tutorial de como rodar o projeto (respectivamente):

    -npm install
    -npm run start:dev

    com estes dois scripts o projeto sera devidamente iniciado.
    Obs: O script de start inicia um prisma(frameWork de conexão com o bd), e com o script de subir o container do postgres, portanto não há necessidade de rodar esses scripts manualmente.
    
Rotas dos End-Points da API (requisições JSON):

    CRUD de tarefas:

        criar uma tarefa - http://localhost/task/create

        atualizar uma tarefa - http://localhost/task/update

        deletar uma tarefa - http://localhost/task/delete

        buscar uma tarefa - http://localhost/task/find

        listar todas tarefas - http://localhost/task/findAll
    
    CRUD de listas:

        criar uma lista - http://localhost/list/create

        atualizar uma lista - http://localhost/list/update

        deletar uma lista - http://localhost/list/delete

        buscar uma lista - http://localhost/list/find
        
        listar todas listas - http://localhost/list/findAll

    Vincular tarefa com lista:

        adicionar uma tarefa a uma lista - http://localhost/add-task-in-list

        remover uma tarefa de uma lista - http://localhost/remove-task-from-list

        remover todas as tarefas de uma lista - http://localhost/remove-all-task-from-list

Exemplos de requisições para os End-Points (JSON):



    
