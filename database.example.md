#### Um para Um (One-to-One)

**Mermaid ER Diagram:**

```mermaid
erDiagram
    USERS {
        int id PK "AUTO_INCREMENT"
        string name
    }
    PROFILES {
        int id PK "AUTO_INCREMENT"
        string bio
        int userId FK "UNIQUE"
    }
    USERS ||--|| PROFILES: "has"
```

USERS ||--|| PROFILES: "has"

#### Um para Muitos (One-to-Many)

**Mermaid ER Diagram:**

```mermaid
erDiagram
    USERS {
        int id PK "AUTO_INCREMENT"
        string name
    }
    POSTS {
        int id PK "AUTO_INCREMENT"
        string title
        string content
        int userId FK
    }
    USERS ||--o{ POSTS: "has"
```

USERS ||--o{ POSTS: "has"

#### Muitos para Muitos (Many-to-Many)

**Mermaid ER Diagram:**

```mermaid
erDiagram
    STUDENTS {
        int id PK "AUTO_INCREMENT"
        string name
    }
    COURSES {
        int id PK "AUTO_INCREMENT"
        string title
    }
    STUDENTS }o--o{ COURSES: "enrolled in"
```

STUDENTS }o--o{ COURSES: "enrolled in"

### Resumo

- **Um para Um (One-to-One)**: Cada usuário tem um perfil, e cada perfil pertence a um usuário.
- **Um para Muitos (One-to-Many)**: Um usuário pode ter muitos posts, e cada post pertence a um usuário.
- **Muitos para Muitos (Many-to-Many)**: Um estudante pode estar matriculado em muitos cursos, e um curso pode ter muitos estudantes.
