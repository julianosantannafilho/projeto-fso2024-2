package com.projeto.backend.service.impl;

import com.projeto.backend.entity.Empresa;
import com.projeto.backend.repository.EmpresaRepository;
import com.projeto.backend.service.EmpresaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class EmpresaServiceImpl implements EmpresaService {

    @Autowired
    EmpresaRepository empresaRepository;

    @Override
    public Empresa findById(UUID uuid) {
        return empresaRepository.findById(uuid).orElseThrow();
    }

    @Override
    public Empresa findByCnpj(String cnpj) {
        return empresaRepository.findByCnpj(cnpj);
    }

    @Override
    public Empresa findByEmail(String email) {
        return empresaRepository.findByEmail(email);
    }

    @Override
    public Empresa save(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    @Override
    public void delete(Empresa empresa) {
        empresaRepository.delete(empresa);
    }
}
