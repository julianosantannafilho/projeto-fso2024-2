package com.projeto.backend.util.mapper;

import com.projeto.backend.dto.ItemPedidoDto;
import com.projeto.backend.entity.ItemPedido;
import org.springframework.stereotype.Component;

@Component
public class ItemPedidoMapper {
    public ItemPedido itemPedidoDtoToEntity(ItemPedidoDto itemPedidoDto){
        return ItemPedido.builder().valor(itemPedidoDto.getValor())
                .produto(itemPedidoDto.getProduto())
                .quantidade(itemPedidoDto.getQuantidade())
                .build();
    }
}
