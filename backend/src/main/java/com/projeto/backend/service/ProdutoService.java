package com.projeto.backend.service;

import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Produto;
import com.projeto.backend.repository.ProdutoRepository;

import java.util.List;
import java.util.UUID;

public interface ProdutoService {

    Produto getProduto(UUID uuid);
    List<Produto> getTipoProdutoCategoria(String tipoProdutoCategoria);
    List<Produto> getByNome(String nome);
    List<Produto> findAll();
    void deleteAllById(List<UUID> id);
    List<Produto> findAllByEmpresa(String UUID);
    Produto save(Produto produto);
    void delete(Produto produto);
}
