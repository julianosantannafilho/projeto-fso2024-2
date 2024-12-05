package com.projeto.backend.controller;


import com.projeto.backend.dto.ItemPedidoDto;
import com.projeto.backend.dto.PedidoDto;
import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.ItemPedido;
import com.projeto.backend.entity.Pedido;
import com.projeto.backend.entity.Usuario;
import com.projeto.backend.service.EmpresaService;
import com.projeto.backend.service.ItemPedidoService;
import com.projeto.backend.service.PedidoService;
import com.projeto.backend.service.UsuarioService;
import com.projeto.backend.util.mapper.ItemPedidoMapper;
import com.projeto.backend.util.mapper.PedidoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class PedidoController {
    PedidoService pedidoService;
    EmpresaService empresaService;
    UsuarioService usuarioService;
    ItemPedidoService itemPedidoService;
    ItemPedidoMapper itemPedidoMapper;

    @Autowired
    public PedidoController(PedidoService pedidoService,ItemPedidoMapper itemPedidoMapper,EmpresaService empresaService, UsuarioService usuarioService, ItemPedidoService itemPedidoService) {
        this.pedidoService = pedidoService;
        this.itemPedidoMapper = itemPedidoMapper;
        this.usuarioService = usuarioService;
        this.empresaService = empresaService;
        this.itemPedidoService = itemPedidoService;
    }

    @PostMapping("/pedido/{empresa}/{usuario}")
    @ResponseStatus(HttpStatus.OK)
    public Pedido createPedido(@PathVariable String empresa, @PathVariable String usuario,@RequestBody ItemPedidoDto pedidoDto) {
        ItemPedido itemPedido = itemPedidoService.save(itemPedidoMapper.itemPedidoDtoToEntity(pedidoDto));
        Empresa empresa1 = empresaService.findById(UUID.fromString(empresa));
        return pedidoService.save(Pedido.builder().itemPedidos(List.of(itemPedido)).empresa(empresa1).usuario(usuario).build());
    }

    @GetMapping("/pedido")
    @ResponseStatus(HttpStatus.OK)
    public List<Pedido> getAllPedidos() {
        List<Pedido> pedidos = pedidoService.getAllPedidos();
        return pedidos;

    }
}