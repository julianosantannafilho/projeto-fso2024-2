package com.projeto.backend.util.mapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.projeto.backend.dto.UsuarioDto;
import com.projeto.backend.entity.Usuario;
import org.springframework.stereotype.Component;

@Component
public class UsuarioMapper {
    public Usuario usuarioDtoToEntity(UsuarioDto usuarioDto){
        return Usuario.builder().cep(usuarioDto.getCep())
                .email(usuarioDto.getEmail())
                .nome(usuarioDto.getNome())
                .cartao_de_credito(usuarioDto.getCartao_de_credito())
                .comentarios(usuarioDto.getComentarios())
                .senha(usuarioDto.getSenha())
                .data_nascimento(usuarioDto.getData_nascimento())
                .build();
    }
}
