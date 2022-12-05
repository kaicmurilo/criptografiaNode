# criptografiaNode

-------------------------------------------

Biblioteca crypto -> Nativa do node.

-------------------------------------------

Sessao -> Quantidade de tempo em que o usuario esta autenticado e conectado a um servico ou um sistema. 

-------------------------------------------

Vantagem e Desvantagem token -> Nao precisamos mais armazenar nenhum dado, apenas validar o token, mas ainda podemos ter o problemas com o tokenb sendo interceptado. 

-------------------------------------------

JWT ->> Jason Web Token, e um padrao aberto que define uma forma segura de transmitir informacao entre duas partes como um objeto JSON. Essa informacao pode ser verificada e confiada pois foi assinada digitalmente. Contendo Cabecalho (Header), Dados (Payload), Assinatura

https://Jwt.io

npm i jsonwebtoken@8.5.1

-------------------------------------------

SESSEION E LOCAL STORAGE 
A maioria das pessoas tende a armazenar seus JWTs no localStorage do navegador web, porém essa tática deixa seus aplicativos abertos a um ataque chamado XSS. Nesse tipo de ataque, um invasor aproveita o fato de que o armazenamento local é acessível por qualquer código JavaScript executado no mesmo domínio da aplicação. Assim, por exemplo, se o invasor encontrar uma maneira de injetar código JavaScript mal-intencionado em seu aplicativo, seu token JWT estará imediatamente disponível para eles. Portanto, se deseja segurança em suas aplicações, não armazene um JWT no localStorage.

Mas e no sessionStorage? Assim como o localStorage, o armazenamento de sessão é acessível por qualquer código JavaScript executado no mesmo domínio em que o seu aplicativo está hospedado. Portanto, a única diferença entre os dois é que no sessionStorage, quando um usuário fecha o navegador, o JWT desaparecerá e o usuário terá que fazer login novamente em sua próxima visita ao aplicativo web. Portanto, evite também armazenar um JWT no sessionStorage.

A forma mais segura, se bem implementada, é utilizar cookie httpOnly para armazenar tokens JWT. Este é um tipo especial de cookie que é enviado apenas em solicitações HTTP para o servidor. Nunca é acessível (tanto para leitura quanto para escrita) a partir do JavaScript em execução no navegador e pode ter uma data de expiração definida.

