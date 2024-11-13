package com.projeto.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder

public class Pedido {
    @Id
    @Builder.Default
    private UUID id = UUID.randomUUID();
    private OffsetDateTime date;
    private long statusPedido;

    @ManyToOne
    private Empresa empresa;

    @OneToMany
    @JoinColumn(name = "usuario")
    private Usuario usuario;

    @OneToMany
    @JoinColumn(name = "pedido_id")
    private List<ItemPedido> itemPedidos;

}