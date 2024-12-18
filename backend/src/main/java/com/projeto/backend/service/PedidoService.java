package com.projeto.backend.service;

import com.projeto.backend.entity.Pedido;

import java.util.List;
import java.util.UUID;

public interface PedidoService {
    Pedido getPedidos(UUID uuid);
    List<Pedido> getAllPedidos();
    Pedido save(Pedido pedido);
    void delete(Pedido pedido);
}
