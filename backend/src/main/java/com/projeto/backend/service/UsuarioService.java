package com.projeto.backend.service;

import com.projeto.backend.entity.Usuario;
import com.projeto.backend.repository.UsuarioRepository;

import java.util.UUID;

public interface UsuarioService  {
    Usuario findById(UUID id);

    Usuario findByEmail(String email);

    Usuario save(Usuario usuario);

    void delete(Usuario usuario);
}
