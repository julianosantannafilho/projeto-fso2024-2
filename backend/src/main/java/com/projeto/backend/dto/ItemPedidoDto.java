package com.projeto.backend.dto;

import com.projeto.backend.entity.Produto;
import lombok.*;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ItemPedidoDto {

    private UUID id;
    private String produto;
    private long quantidade;
    private String valor;
}
