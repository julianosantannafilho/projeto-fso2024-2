package com.projeto.backend.repository;

import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProdutoRepository extends JpaRepository<Produto, UUID> {
    List<Produto> findAllByEmpresa(Empresa empresa);
}
