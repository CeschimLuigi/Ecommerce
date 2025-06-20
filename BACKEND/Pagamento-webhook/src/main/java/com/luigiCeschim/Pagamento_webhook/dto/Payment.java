package com.luigiCeschim.Pagamento_webhook.dto;

public record Payment(
        int amount,
        int fee,
        String method

) {
}
