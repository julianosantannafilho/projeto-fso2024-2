package com.projeto.backend.util.mapper;

import com.projeto.backend.dto.ProdutoDto;
import com.projeto.backend.entity.Produto;
import org.springframework.stereotype.Component;

@Component
public class ProdutoMapper {
    public Produto produtoDtoToEntity(ProdutoDto produtoDto){
        return Produto.builder().nome(produtoDto.getNome())
                .notas(produtoDto.getNotas())
                .nome(produtoDto.getNome())
                .valor(produtoDto.getValor())
                .empresa(produtoDto.getEmpresa())
                .comentario(produtoDto.getComentario())
                .status(produtoDto.getStatus())
                .tipoProdutoCategoria(produtoDto.getTipoProdutoCategoria())
                .descricao(produtoDto.getDescricao())
                .quantidade(produtoDto.getQuantidade())
                .build();
    }
}
