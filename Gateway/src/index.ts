  import express, { Express, Request, Response, NextFunction} from "express";
  import { createProxyMiddleware } from "http-proxy-middleware";
  import dotenv from 'dotenv';
  dotenv.config({ path: './src/.env' });

  const app: Express = express();

  // NO usar ningún middleware de body parsing global
  // El proxy middleware de http-proxy-middleware va a manejar el stream directamente
  // Solo logging, sin consumir el body

  // Middleware global para loggear todas las peticiones
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[GATEWAY REQUEST] ${req.method} ${req.path} - Content-Type: ${req.get('content-type')}`);
    next();
  });

    const routes = {
      "/inventory": process.env.INVENTORY_URL || "http://inventory-service-app:4001/api/",
      "/users": process.env.USERS_AND_EMPLOYERS_URL || "http://user-service-app:4002/api",
      //"/orders": process.env.ORDERS_URL || "http://order-service:4003",
      
      "/reservations": process.env.RESERVATIONS_AND_TABLES_URL || "http://reservation-service-app:4004/api/reservations",
      "/table": process.env.RESERVATIONS_AND_TABLES_URL || "http://reservation-service-app:4004/api/table",
      // Eventos y Promociones (exponer todas las rutas del ms5)
      "/events": process.env.EVENTS_AND_PROMOTIONS_URL_EVENTS || "http://event-service-app:4005/api/events",
      "/promotions": process.env.EVENTS_AND_PROMOTIONS_URL_PROMOTIONS || "http://event-service-app:4005/api/promotions",
      "/eventos-dias": process.env.EVENTS_AND_PROMOTIONS_URL_EVENTOS_DIAS || "http://event-service-app:4005/api/eventos-dias",
      "/productos-promocion": process.env.EVENTS_AND_PROMOTIONS_URL_PRODUCTOS_PROMOCION || "http://event-service-app:4005/api/productos-promocion",
      //"/reports": process.env.REPORTS_AND_BINNACLES_URL || "http://report-binnacle-service:4006",
    }

  Object.entries(routes).forEach(([path, target]) => {
    console.log(path, target) 
    app.use(
      path,
      createProxyMiddleware({
        target, 
        changeOrigin: true,
        pathRewrite: (pathReq) => {
          // Eliminar el prefijo del path (ej: /users -> /api)
          const newPath = pathReq.replace(path, '');
          console.log(`[PROXY REWRITE] ${pathReq} -> ${newPath}`);
          return newPath;
        },
        logger: console, 
        timeout: 60000, // 60 segundos
        proxyTimeout: 60000, // 60 segundos
        ws: false, // No soportar WebSocket por ahora
        preserveHeaderKeyCase: true
      })
    );
  });


  const PORT = process.env.PORT || 4000;

  async function startServer() {
      const server = app.listen(PORT, () => {
        console.log("✅ Servidor corriendo en", PORT, "puedes consumir la API Gateway");
      });
      
      // Aumentar los timeouts del servidor HTTP
      server.timeout = 60000; // 60 segundos
      server.keepAliveTimeout = 65000; // 65 segundos
      server.headersTimeout = 66000; // 66 segundos
    }
    
  startServer()