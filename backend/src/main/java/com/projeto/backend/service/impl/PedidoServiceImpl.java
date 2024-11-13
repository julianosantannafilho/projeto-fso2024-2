package com.projeto.backend.service.impl;

import com.projeto.backend.entity.Pedido;
import com.projeto.backend.repository.PedidoRepository;
import com.projeto.backend.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PedidoServiceImpl implements PedidoService {

    @Autowired
    PedidoRepository pedidoRepository;

    @Override
    public Pedido getPedidos(UUID uuid) {
        return pedidoRepository.findById(uuid).orElseThrow();
    }

    @Override
    public Pedido save(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    public void delete(Pedido pedido) {
        pedidoRepository.delete(pedido);
    }
}
