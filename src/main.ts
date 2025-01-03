import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(cookieParser());
    app.enableCors({
        origin: true, // Allows requests from any origin (during development)
        credentials: true, // 
       
    })
    await app.listen(8000);
}

bootstrap();
