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

public class ItemPedido {

    @Id
    @Builder.Default
    private UUID id = UUID.randomUUID();

    @ManyToOne
    private Produto produto;
    private long quantidade;
    private String valor;


}

