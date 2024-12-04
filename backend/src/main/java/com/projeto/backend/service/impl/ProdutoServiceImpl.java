package com.projeto.backend.service.impl;

import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Produto;
import com.projeto.backend.repository.EmpresaRepository;
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

    @Autowired
    EmpresaRepository empresaRepository;

    @Override
    public Produto getProduto(UUID uuid) {
        return produtoRepository.findById(uuid).orElseThrow();
    }

    @Override
    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    @Override
    public void deleteAllById(List<UUID> id) {
        produtoRepository.deleteAllById(id);
    }

    @Override
    public List<Produto> findAllByEmpresa(String id) {
        Empresa empresa = empresaRepository.findById(UUID.fromString(id)).get();
        return produtoRepository.findAllByEmpresa(empresa);
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
