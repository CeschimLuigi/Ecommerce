package com.luigiCeschim.Pagamento_webhook.service;

import com.luigiCeschim.Pagamento_webhook.broker.BrokerIT;
import com.luigiCeschim.Pagamento_webhook.dto.PayloadDTO;
import com.luigiCeschim.Pagamento_webhook.dto.PixToSendDTO;
import org.springframework.stereotype.Service;

@Service
public class WebhookService {



    private final BrokerIT broker;

    public WebhookService(BrokerIT broker) {
        this.broker = broker;
    }

    public void sendToQueue(PayloadDTO dto){
        PixToSendDTO pix = new PixToSendDTO(dto.data().pixQrCode().id(),dto.data().pixQrCode().status());

        broker.sendToQueue(pix);
    }
}
