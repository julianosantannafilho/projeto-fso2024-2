package com.projeto.backend.dto;

import com.projeto.backend.entity.Comentario;
import com.projeto.backend.entity.Pedido;
import jakarta.persistence.Id;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDto {
    private UUID id;
    private String nome;
    private String data_nascimento;
    private String email;
    private String senha;
    private int cep;
    private String cpf;
    private int cartao_de_credito;
    private boolean isEmpresa;

    private List<Comentario> comentarios;
}
