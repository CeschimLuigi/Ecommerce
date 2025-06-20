package com.luigiCeschim.Pagamento_webhook.dto;

public record PixQrCode(
        int amount,
        String id,
        String kind,
        String status

) {
}
