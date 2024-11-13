package com.projeto.backend.util.mapper;

import com.projeto.backend.dto.EmpresaDto;
import com.projeto.backend.entity.Empresa;

public class EmpresaMapper {
    public Empresa empresaDtoToEntity(EmpresaDto empresaDto){
        return Empresa.builder().cep(empresaDto.getCep())
                .cnpj(empresaDto.getCnpj())
                .email(empresaDto.getEmail())
                .nome(empresaDto.getNome())
                .pedido(empresaDto.getPedido())
                .produtos(empresaDto.getProdutos())
                .senha(empresaDto.getSenha())
                .build();
    }
}
