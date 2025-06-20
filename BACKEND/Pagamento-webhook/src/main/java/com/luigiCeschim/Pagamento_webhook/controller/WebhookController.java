package com.luigiCeschim.Pagamento_webhook.controller;

import com.luigiCeschim.Pagamento_webhook.dto.PayloadDTO;
import com.luigiCeschim.Pagamento_webhook.service.WebhookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/webhook")
public class WebhookController {


    private final WebhookService service;

    @Autowired
    public WebhookController(WebhookService service) {
        this.service = service;
    }

    @PostMapping("/abacatepay")
    public void getWebhook(@RequestBody PayloadDTO payload,
                           @RequestParam("webhookSecret")String secret
                           )
    {
        System.out.println(payload);
        System.out.println(secret);
        service.sendToQueue(payload);
    }
}
