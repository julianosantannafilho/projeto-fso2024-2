package com.projeto.backend.util.mapper;

import com.projeto.backend.dto.ComentarioDto;
import com.projeto.backend.entity.Comentario;

public class ComentarioMapper {
    public Comentario comentarioDtoToEntity(ComentarioDto comentarioDto){
        return Comentario.builder().comentario(comentarioDto.getComentario())
                .produto(comentarioDto.getProduto())
                .usuario(comentarioDto.getUsuario())
                .build();
    }
}
