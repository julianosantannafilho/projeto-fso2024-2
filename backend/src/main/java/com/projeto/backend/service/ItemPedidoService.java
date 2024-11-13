package com.projeto.backend.service;

import com.projeto.backend.entity.ItemPedido;

import java.util.UUID;

public interface ItemPedidoService {
    ItemPedido getItemPedido(UUID uuid);
    ItemPedido save(ItemPedido itemPedido);
    void delete(ItemPedido itemPedido);
}
