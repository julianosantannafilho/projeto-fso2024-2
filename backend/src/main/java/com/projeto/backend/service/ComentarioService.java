package com.projeto.backend.service;

import com.projeto.backend.entity.Comentario;

import java.util.UUID;

public interface ComentarioService {
    Comentario getComentario(UUID uuid);
    Comentario save(Comentario comentario);
    void delete(Comentario comentario);
}
