package com.projeto.backend.controller;

import com.projeto.backend.dto.EmpresaDto;
import com.projeto.backend.dto.UsuarioDto;
import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.Usuario;
import com.projeto.backend.exceptions.GenericException;
import com.projeto.backend.service.EmpresaService;
import com.projeto.backend.service.UsuarioService;
import com.projeto.backend.util.mapper.EmpresaMapper;
import com.projeto.backend.util.mapper.UsuarioMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.UUID;

@RestController
public class UsuarioController {

    UsuarioService usuarioService;
    UsuarioMapper usuarioMapper;
    EmpresaService empresaService;
    EmpresaMapper empresaMapper;
    @Autowired
    public UsuarioController(UsuarioService usuarioService, UsuarioMapper usuarioMapper, EmpresaService empresaService, EmpresaMapper empresaMapper){
        this.usuarioService = usuarioService;
        this.usuarioMapper= usuarioMapper;
        this.empresaService = empresaService;
        this.empresaMapper = empresaMapper;
    }

    @PostMapping("/registrar")
    public Usuario createUser(@RequestBody UsuarioDto usuarioDto) throws Exception {
        Usuario usuario = usuarioService.findByEmail(usuarioDto.getEmail());
        if(usuario != null){
            throw new GenericException("Email já registrado");
        }
        return usuarioService.save(usuarioMapper.usuarioDtoToEntity(usuarioDto));
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public Usuario login(@RequestBody UsuarioDto usuarioDto) throws Exception {
        Usuario usuario = usuarioService.findByEmail(usuarioDto.getEmail());
        System.out.println("bombaaaa" + usuario);
        if(usuario != null && Objects.equals(usuario.getSenha(), usuarioDto.getSenha()) && Objects.equals(usuario.getEmail(), usuarioDto.getEmail())){
            return usuario;
        }
        throw new GenericException("Não registrado");
    }
}
