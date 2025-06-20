package com.luigiceschim.pedidos_consumer.service;

import com.luigiceschim.pedidos_consumer.dto.PayloadDTO;
import com.luigiceschim.pedidos_consumer.repository.PedidosRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConsumerService implements ConsumeServiceIT {

    private final PedidosRespository respository;

    @Autowired
    public ConsumerService(PedidosRespository respository) {
        this.respository = respository;
    }


    @Override
    public void salvarPedido(PayloadDTO dto) {
        respository.save(dto);
    }
}
