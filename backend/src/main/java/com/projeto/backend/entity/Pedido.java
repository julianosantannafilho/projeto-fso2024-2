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
    private String statusPedido;

    @ManyToOne
    private Empresa empresa;
    private String usuario;

    @OneToMany
    private List<ItemPedido> itemPedidos;

}