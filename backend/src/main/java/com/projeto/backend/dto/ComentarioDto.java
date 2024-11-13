package com.projeto.backend.dto;

import com.projeto.backend.entity.Produto;
import com.projeto.backend.entity.Usuario;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ComentarioDto {
    private UUID id;

    private String comentario;

    private Usuario usuario;

    private Produto produto;
}
