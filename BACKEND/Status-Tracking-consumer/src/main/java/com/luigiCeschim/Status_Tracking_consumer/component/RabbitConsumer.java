package com.luigiCeschim.Status_Tracking_consumer.component;

import com.luigiCeschim.Status_Tracking_consumer.dto.PayloadDTO;
import com.luigiCeschim.Status_Tracking_consumer.service.ConsumeServiceIT;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class RabbitConsumer {

    private final ConsumeServiceIT serviceIT;

    @Autowired
    public RabbitConsumer(ConsumeServiceIT serviceIT) {
        this.serviceIT = serviceIT;
    }

    @RabbitListener(queues = "fila_pagamento")
    public void consumeMessage(@Payload PayloadDTO dto){
        System.out.println(dto);

        serviceIT.atualizarPedido(dto);

    }


}
