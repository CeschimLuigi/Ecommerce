package com.luigiceschim.pedidos_consumer.dto;

import java.math.BigDecimal;

public record Produtos(
        String produtoId,
        String nome,
        BigDecimal preco,
        Integer quantidade
) {
}
