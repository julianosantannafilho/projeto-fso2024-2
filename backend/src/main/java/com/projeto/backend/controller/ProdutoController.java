package com.projeto.backend.controller;

import com.projeto.backend.dto.ProdutoDto;
import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Produto;
import com.projeto.backend.service.ProdutoService;
import com.projeto.backend.util.mapper.ProdutoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public Produto createProduto(@RequestBody ProdutoDto produtoDto){
        System.out.println(produtoDto);
        return produtoService.save(produtoMapper.produtoDtoToEntity(produtoDto));
    }

    @GetMapping("/{id}/get")
    public List<Produto> getProdutos(@PathVariable String id){
        return produtoService.findAllByEmpresa(id);
    }

    @GetMapping("/getAll")
    public List<Produto> getAllProdutos(){
        return produtoService.findAll();
    }

    @PostMapping("/delete")
        public void deleteProduto(@RequestBody ArrayList<String> ids){
        List<UUID> list = ids.stream()
                .map(id -> {
                    try {
                        return UUID.fromString(id);  // Convert each string to UUID
                    } catch (IllegalArgumentException e) {
                        // Log invalid UUID
                        return null;
                    }
                })
                .filter(Objects::nonNull)  // Remove invalid UUIDs (null values)
                .collect(Collectors.toList());  // Collect into a list
        produtoService.deleteAllById(list);
    }

}
