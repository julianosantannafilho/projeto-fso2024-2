package com.projeto.backend.service;

import com.projeto.backend.entity.Usuario;
import com.projeto.backend.repository.UsuarioRepository;

import java.util.UUID;

public interface UsuarioService  {
    Usuario findUser(UUID id);

    Usuario save(Usuario usuario);

    void delete(Usuario usuario);
}
