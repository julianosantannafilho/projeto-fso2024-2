package com.projeto.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder

public class Comentario {

    @Id
    @Builder.Default
    private UUID id = UUID.randomUUID();

    private String comentario;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Produto produto;
}
