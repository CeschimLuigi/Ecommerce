package com.luigiCeschim.Pagamento_webhook.dto;

public record PayloadDTO(
        Data data,
        boolean devMode,
        String event

) {
}
