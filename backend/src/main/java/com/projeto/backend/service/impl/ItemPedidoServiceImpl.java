package com.projeto.backend.service.impl;

import com.projeto.backend.entity.ItemPedido;
import com.projeto.backend.repository.ItemPedidoRepository;
import com.projeto.backend.service.ItemPedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ItemPedidoServiceImpl implements ItemPedidoService {

    @Autowired
    ItemPedidoRepository itemPedidoRepository;

    @Override
    public ItemPedido getItemPedido(UUID uuid) {
        return itemPedidoRepository.findById(uuid).orElseThrow();
    }

    @Override
    public ItemPedido save(ItemPedido itemPedido) {
        return itemPedidoRepository.save(itemPedido);
    }

    @Override
    public void delete(ItemPedido itemPedido) {
        itemPedidoRepository.delete(itemPedido);
    }
}
