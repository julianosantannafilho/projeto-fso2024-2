package com.projeto.backend.controller;

import com.projeto.backend.dto.UsuarioDto;
import com.projeto.backend.entity.Usuario;
import com.projeto.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping("/create")
    public Usuario createUser(@RequestBody UUID id){
        Usuario usuario = usuarioService.findUser(id);

        return usuario;
    }

    @PostMapping("/login")
    public UUID login(@RequestBody UsuarioDto usuarioDto) throws Exception {
        Usuario usuario = usuarioService.findUserByEmail(usuarioDto.getEmail());
        System.out.println("bombaaaa");
        if(usuario.getSenha().equals(usuarioDto.getSenha())){
            return usuario.getId();
        }else{
            return UUID.randomUUID();
        }
    }
}
