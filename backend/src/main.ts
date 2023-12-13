import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('Journify API')
		.setDescription(
			'RESTful API for Journify - A trusted, memorable, and enjoyable travel experience mobile application',
		)
		.setVersion('1.0')
		.addTag('Journify')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	await app.listen(process.env.PORT);
}
bootstrap();
