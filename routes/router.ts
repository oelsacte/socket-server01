import { Router, Request, Response } from 'express';

const router = Router();
router.get('/mensajes', (req: Request, resp: Response) => {
  resp.json({
    ok: true,
    mensaje: 'Todo está bien!!',
  });
});

router.post('/mensajes/:id', (req: Request, resp: Response) => {
  const cuerpo = req.body.cuerpo;
  const de = req.body.de;
  const id = req.params.id;

  resp.json({
    ok: true,
    cuerpo,
    de,
    id
  });
});

export default router;
