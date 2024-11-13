package com.projeto.backend.controller;

import com.projeto.backend.entity.Usuario;
import com.projeto.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping("/create")
    public Usuario createUser(@RequestBody Usuario usuario){
        usuarioService.
    }
}
