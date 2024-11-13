package com.projeto.backend.service.impl;

import com.projeto.backend.entity.Comentario;
import com.projeto.backend.repository.ComentarioRepository;
import com.projeto.backend.service.ComentarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ComentarioServiceImpl implements ComentarioService {

    @Autowired
    ComentarioRepository comentarioRepository;

    @Override
    public Comentario getComentario(UUID uuid) {
        return comentarioRepository.findById(uuid).orElseThrow();
    }

    @Override
    public Comentario save(Comentario comentario) {
        return comentarioRepository.save(comentario);
    }

    @Override
    public void delete(Comentario comentario) {
        comentarioRepository.delete(comentario);
    }
}
