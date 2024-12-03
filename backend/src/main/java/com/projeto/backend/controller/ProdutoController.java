package com.projeto.backend.controller;

import com.projeto.backend.dto.ProdutoDto;
import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Produto;
import com.projeto.backend.service.ProdutoService;
import com.projeto.backend.util.mapper.ProdutoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    ProdutoService produtoService;
    ProdutoMapper produtoMapper;

    @Autowired
    public ProdutoController(ProdutoService produtoService, ProdutoMapper produtoMapper){
        this.produtoMapper = produtoMapper;
        this.produtoService = produtoService;
    }

    @PostMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Produto createProduto(@PathVariable UUID id, @RequestBody ProdutoDto produtoDto){
        return produtoService.save(produtoMapper.produtoDtoToEntity(produtoDto));
    }
}
