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

public class Usuario {

    @Id
    @Builder.Default
    private UUID id = UUID.randomUUID();
    private String nome;
    private String data_nascimento;
    private String email;
    private String senha;
    private int cep;
    private int cartao_de_credito;

    @ManyToOne
    private Pedidos pedidosList;
}
