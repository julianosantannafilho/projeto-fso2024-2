package com.projeto.backend.util.mapper;

import com.projeto.backend.dto.PedidoDto;
import com.projeto.backend.entity.Pedido;
import org.springframework.stereotype.Component;

@Component
public class PedidoMapper {
    public Pedido pedidoDtoToEntity(PedidoDto pedidoDto){
        return Pedido.builder().statusPedido(pedidoDto.getStatusPedido())
                .itemPedidos(pedidoDto.getItemPedidos())
                .date(pedidoDto.getDate())
                .empresa(pedidoDto.getEmpresa())
                .usuario(pedidoDto.getUsuario())
                .build();
    }
}
