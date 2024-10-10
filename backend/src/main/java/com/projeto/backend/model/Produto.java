package com.projeto.backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Generated;

import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder

public class Produto {

    @Id
    @Builder.Default
    private UUID id = UUID.randomUUID();
    private String nome;
    private long quantidade;
    private String valor;

    @ManyToOne
    private Empresa empresa;
    private long status;

    @OneToMany
    private Comentario comentario;
    private String descricao;
    private long notas;
}
