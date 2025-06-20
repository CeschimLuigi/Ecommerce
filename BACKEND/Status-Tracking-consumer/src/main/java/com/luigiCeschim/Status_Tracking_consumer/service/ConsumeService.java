package com.luigiCeschim.Status_Tracking_consumer.service;

import com.luigiCeschim.Status_Tracking_consumer.dto.PayloadDTO;
import com.luigiCeschim.Status_Tracking_consumer.repository.MongoRepositoryIT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConsumeService implements ConsumeServiceIT {

    private final MongoRepositoryIT repositoryIT;

    @Autowired
    public ConsumeService(MongoRepositoryIT repositoryIT) {
        this.repositoryIT = repositoryIT;
    }

    @Override
    public void atualizarPedido(PayloadDTO dto) {
        repositoryIT.atualizarStatusPedido(dto);
    }
}
