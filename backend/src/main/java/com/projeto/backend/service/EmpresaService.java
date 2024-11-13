package com.projeto.backend.service;

import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Empresa;

import java.util.UUID;

public interface EmpresaService {
    Empresa getEmpresa(UUID uuid);
    Empresa save(Empresa empresa);
    void delete(Empresa empresa);
}
