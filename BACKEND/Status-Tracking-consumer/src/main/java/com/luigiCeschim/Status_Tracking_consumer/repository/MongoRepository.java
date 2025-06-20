package com.luigiCeschim.Status_Tracking_consumer.repository;

import com.luigiCeschim.Status_Tracking_consumer.dto.PayloadDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class MongoRepository implements MongoRepositoryIT{

    @Autowired
    private MongoTemplate template;

    @Override
    public void atualizarStatusPedido(PayloadDTO dto) {

        Query query = new Query(Criteria.where("_id").is(dto.id()));
        Update update = new Update().set("status", dto.status());

        template.updateFirst(query, update, "pedidos");

        System.out.println(query);
    }
}
