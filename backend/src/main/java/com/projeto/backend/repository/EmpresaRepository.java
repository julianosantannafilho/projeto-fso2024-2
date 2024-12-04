package com.projeto.backend.repository;

import com.projeto.backend.entity.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface EmpresaRepository extends JpaRepository<Empresa, UUID> {
    Empresa findByCnpj(String cnpj);
    Empresa findByEmail(String email);
}
