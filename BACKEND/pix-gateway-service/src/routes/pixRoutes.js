import express from 'express'
import { createPix } from '../services/pixService.js';
import { buildRequesDTO } from '../schemas/requestDTO.js';


const router = express.Router();

router.post('/create-pix', async (req, res) => {
    try{

        const requestDTO = buildRequesDTO(req.body);
        const { amount } = requestDTO;
        

        const data = await createPix({ amount });

        
        res.status(201).json(data)
        
    }catch(error){
        res.status(500).json({ error: 'Erro interno ao gerar Pix.' });
        console.log(error)
        throw new Error("Houve um problema na controller pixRoutes...")
       

    }

});
export default router;
    
