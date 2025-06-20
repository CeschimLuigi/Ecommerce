package com.luigiCeschim.Pagamento_webhook.broker;

import com.luigiCeschim.Pagamento_webhook.dto.PixToSendDTO;

public interface BrokerIT {
    void sendToQueue(PixToSendDTO dto);
}
