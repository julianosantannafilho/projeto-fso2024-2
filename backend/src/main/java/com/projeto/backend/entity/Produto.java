package com.projeto.backend.entity;

import com.projeto.backend.util.TipoProdutoCategorias;
import jakarta.persistence.*;
import lombok.*;

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
    private String status;
    private String tipoProdutoCategoria;
    private String descricao;
    private long notas;
    private String imagem;
    @ManyToOne
    private Empresa empresa;

    @OneToMany
    @JoinColumn(name = "comentarios")
    private List<Comentario> comentario;
}
