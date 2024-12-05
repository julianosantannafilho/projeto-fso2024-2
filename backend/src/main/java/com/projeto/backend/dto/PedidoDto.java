package com.projeto.backend.dto;

import com.projeto.backend.entity.Empresa;
import com.projeto.backend.entity.ItemPedido;
import com.projeto.backend.entity.Usuario;
import jakarta.persistence.*;
import lombok.*;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PedidoDto {
    private UUID id;
    private OffsetDateTime date;
    private String statusPedido;

    private Empresa empresa;
    private String usuario;

    private List<ItemPedido> itemPedidos;
}
