package com.luigiceschim.pedidos_consumer.service;

import com.luigiceschim.pedidos_consumer.dto.PayloadDTO;

public interface ConsumeServiceIT {
    void salvarPedido(PayloadDTO dto);
}
