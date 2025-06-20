package com.luigiceschim.pedidos_consumer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.List;

@Document(collection = "pedidos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PayloadDTO{

        @Id
        private String pixId;
        private BigDecimal amount;
        private Long expiresIn;
        private String description;
        private Customer customer;
        private List<Produtos> itens;
        private String status;

}
