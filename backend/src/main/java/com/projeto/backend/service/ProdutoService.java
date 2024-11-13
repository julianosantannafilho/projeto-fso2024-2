package com.projeto.backend.service;

import com.projeto.backend.entity.Produto;
import com.projeto.backend.repository.ProdutoRepository;

import java.util.List;
import java.util.UUID;

public interface ProdutoService {

    Produto getProduto(UUID uuid);
    Produto save(Produto produto);
    void delete(Produto produto);
}
