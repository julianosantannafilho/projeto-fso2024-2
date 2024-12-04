package com.projeto.backend.service;

import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Empresa;

import java.util.UUID;

public interface EmpresaService {
    Empresa findById(UUID uuid);
    Empresa findByCnpj(String cnpj);
    Empresa findByEmail(String email);
    Empresa save(Empresa empresa);
    void delete(Empresa empresa);
}
