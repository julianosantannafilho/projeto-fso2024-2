package com.projeto.backend.dto;

import com.projeto.backend.entity.Pedido;
import com.projeto.backend.entity.Produto;
import lombok.*;

import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class EmpresaDto {

    private UUID id;
    private String nome;
    private String cnpj;
    private String email;
    private String senha;
    private int cep;

    private Pedido pedido;

    private List<Produto> produtos;
}
