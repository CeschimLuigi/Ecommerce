package com.luigiCeschim.Pagamento_webhook.broker;

import com.luigiCeschim.Pagamento_webhook.dto.PixToSendDTO;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RabbitBroker implements BrokerIT {

    @Autowired
    private RabbitTemplate template;

    @Override
    public void sendToQueue(PixToSendDTO dto) {
        template.convertAndSend("","fila_pagamento",dto);
    }
}
