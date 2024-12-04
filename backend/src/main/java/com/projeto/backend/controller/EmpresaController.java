package com.projeto.backend.controller;

import com.projeto.backend.dto.EmpresaDto;
import com.projeto.backend.dto.ProdutoDto;
import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Produto;
import com.projeto.backend.exceptions.GenericException;
import com.projeto.backend.service.EmpresaService;
import com.projeto.backend.service.ProdutoService;
import com.projeto.backend.util.mapper.EmpresaMapper;
import com.projeto.backend.util.mapper.ProdutoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    EmpresaService empresaService;
    EmpresaMapper empresaMapper;

    @Autowired
    public EmpresaController(EmpresaService empresaService, EmpresaMapper empresaMapper){
        this.empresaMapper = empresaMapper;
        this.empresaService = empresaService;
    }

    @PostMapping("/registrar")
    public Empresa createEmpresa(@RequestBody EmpresaDto empresaDto){
        Empresa empresa = empresaService.findByCnpj(empresaDto.getCnpj());
        if(empresa == null){
            return empresaService.save(empresaMapper.empresaDtoToEntity(empresaDto));
        }
        throw new GenericException("Empresa já cadastrada pelo cnpj");
    }

    @PostMapping("/login")
    public Empresa empresaLogin(@RequestBody EmpresaDto empresaDto){
        Empresa empresa = empresaService.findByEmail(empresaDto.getEmail());
        if(empresa != null && Objects.equals(empresa.getSenha(), empresaDto.getSenha())){
            return empresa;
        }
        throw new GenericException("Empresa não cadastrada");
    }

    @GetMapping("/{id}/get")
    public Empresa getEmpresa(@PathVariable String id){
        Empresa empresa = empresaService.findById(UUID.fromString(id));

        return empresa;
    }
}
