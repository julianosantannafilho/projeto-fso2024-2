package com.projeto.backend.service.impl;

import com.projeto.backend.entity.Produto;
import com.projeto.backend.repository.ProdutoRepository;
import com.projeto.backend.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    @Autowired
    ProdutoRepository produtoRepository;

    @Override
    public Produto getProduto(UUID uuid) {
        return produtoRepository.findById(uuid).orElseThrow();
    }

    @Override
    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    @Override
    public void delete(Produto produto) {
        produtoRepository.delete(produto);
    }
}
