package com.projeto.backend.service.impl;

import com.projeto.backend.entity.Usuario;
import com.projeto.backend.repository.UsuarioRepository;
import com.projeto.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UsuarioServiceImpl implements UsuarioService{

    @Autowired
    private UsuarioRepository usuarioRepository;


    public Usuario findUser(UUID id) {
        return usuarioRepository.findById(id).orElseThrow();
    }

    @Override
    public Usuario findUserByEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    @Override
    public Usuario save(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public void delete(Usuario usuario) {
        usuarioRepository.delete(usuario);
    }
}
