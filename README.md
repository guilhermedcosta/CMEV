# CMEV: Scripts SQL
1- CRUD de Cadastro de Usuários
INSERT INTO Usuarios (id,cpf,senha,createdAt,updatedAt) VALUES (NULL,$1,$2,$3,$4);
SELECT id, cpf, senha, createdAt, updatedAt FROM Usuarios AS Usuario;
DELETE FROM Usuarios WHERE id = '3'
UPDATE Usuarios SET cpf=$1,senha=$2,updatedAt=$3 WHERE id = $4

2- CRUD de Estoque de Materiais
INSERT INTO Produtos (id,nome_produto,marca,categoria,quantidade_atual,cod_item,preco,createdAt,updatedAt) VALUES (NULL,$1,$2,$3,$4,$5,$6,$7,$8);
SELECT id, nome_produto, marca, categoria, quantidade_atual, cod_item, preco, createdAt, updatedAt FROM Produtos AS Produto;
DELETE FROM Produtos WHERE id = '9' 
UPDATE Produtos SET id=$1,cod_item=$2,nome_produto=$3,marca=$4,categoria=$5,quantidade_atual=$6,preco=$7,updatedAt=$8 WHERE id = $9

3- CRUD de Gerenciamente de Pedido/Requisições de Materiais
INSERT INTO Pedidos (cod_item,setor,material,quantidade,categoria,marca,createdAt,updatedAt) VALUES (NULL,$1,$2,$3,$4,$5,$6,$7);
SELECT cod_item, setor, material, quantidade, categoria, marca, createdAt, updatedAt FROM Pedidos AS Pedido;
UPDATE Pedidos SET setor=$1,material=$2,quantidade=$3,categoria=$4,marca=$5,updatedAt=$6 WHERE cod_item = $7
DELETE FROM Pedidos WHERE cod_item = '1'
