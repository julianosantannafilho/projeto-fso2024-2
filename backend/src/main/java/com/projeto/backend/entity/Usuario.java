package com.projeto.backend.entity;


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

public class Usuario {

    @Id
    @Builder.Default
    private UUID id = UUID.randomUUID();
    private String nome;
    private String data_nascimento;
    private String email;
    private String senha;
    private String cpf;
    private int cep;
    private int cartao_de_credito;


    @OneToMany
    @JoinColumn(name = "comentarios")
    private List<Comentario> comentarios;
}
