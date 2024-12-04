package com.projeto.backend.controller;

import com.projeto.backend.dto.PedidoDto;
import com.projeto.backend.entity.Pedido;
import com.projeto.backend.service.PedidoService;
import com.projeto.backend.util.mapper.PedidoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping
public class PedidoController {
    PedidoService pedidoService;
    PedidoMapper pedidoMapper;

    @Autowired
    public PedidoController(PedidoService pedidoService, PedidoMapper pedidoMapper) {
        this.pedidoService = pedidoService;
        this.pedidoMapper = pedidoMapper;
    }

    @PostMapping("/pedido")
    @ResponseStatus(HttpStatus.OK)
    public Pedido createPedido(@PathVariable UUID id, @RequestBody PedidoDto pedidoDto) {
        return pedidoService.save(pedidoMapper.pedidoDtoToEntity(pedidoDto));
    }
    @GetMapping("/pedido")
    @ResponseStatus(HttpStatus.OK)
    public List<PedidoDto> getAllPedidos() {
        List<Pedido> pedidos = pedidoService.getAllPedidos();
        return pedidos.stream().map(pedidoMapper::ped).toList();

    }
}
