
### Tabela: Users
- **id**: number (Primary Key, Auto Increment)
- **name**: string
- **age**: number

### Tabela: Posts
- **id**: number (Primary Key, Auto Increment)
- **title**: string
- **content**: string
- **userId**: number (Foreign Key referencing Users)

### Relações:
- Um usuário pode ter muitos posts (One-to-Many: Users -> Posts)
- Um post pertence a um usuário (Many-to-One: Posts -> Users)
