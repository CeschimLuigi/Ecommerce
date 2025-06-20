package com.luigiCeschim.Status_Tracking_consumer.repository;

import com.luigiCeschim.Status_Tracking_consumer.dto.PayloadDTO;

public interface MongoRepositoryIT {
    void atualizarStatusPedido(PayloadDTO dto);
}
