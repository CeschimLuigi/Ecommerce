package com.luigiceschim.pedidos_consumer.dto;

public record Customer(
        String name,
        String cellphone,
        String email,
        String taxId
) {
}
