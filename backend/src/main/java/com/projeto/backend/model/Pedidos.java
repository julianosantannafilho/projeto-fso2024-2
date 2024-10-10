package com.projeto.backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Generated;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder

public class Pedidos {
    @Id
    @Builder.Default
    private UUID id = UUID.randomUUID();

    @ManyToOne
    private Produto produto;

    @ManyToOne
    private Empresa empresa;

    @ManyToOne
    private Usuario usuario;

    private long statusPedido;
}
