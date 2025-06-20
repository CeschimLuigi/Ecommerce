package com.luigiceschim.pedidos_consumer.repository;


import com.luigiceschim.pedidos_consumer.dto.PayloadDTO;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PedidosRespository extends MongoRepository<PayloadDTO,String> {
}
