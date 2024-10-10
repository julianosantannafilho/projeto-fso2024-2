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
public class Empresa {

    @Id
    @Builder.Default
    private UUID id = UUID.randomUUID();
    private String nome;
    private String cnpj;
    private String email;
    private String senha;
    private int cep;

    @OneToMany
    @JoinColumn(name ="pedidos")
    private Pedidos pedidos;

}
