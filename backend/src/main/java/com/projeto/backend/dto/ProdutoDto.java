package com.projeto.backend.dto;

import com.projeto.backend.entity.Comentario;
import com.projeto.backend.entity.Empresa;
import com.projeto.backend.util.TipoProdutoCategorias;
import jakarta.persistence.Id;
import lombok.*;

import java.util.List;
import java.util.UUID;



@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProdutoDto {
    private UUID id;
    private String nome;
    private long quantidade;
    private String valor;
    private String status;
    private String tipoProdutoCategoria;
    private String descricao;
    private long notas;
    private String imagem;

    private Empresa empresa;

    private List<Comentario> comentario;
}
