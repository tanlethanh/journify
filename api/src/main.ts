import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({ origin: '*', allowedHeaders: '*' });
	app.use(morgan('tiny'));
	app.use(bodyParser.json({ limit: '50mb' }));
	app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

	const config = new DocumentBuilder()
		.addBearerAuth()
		.setTitle('Journify API')
		.setDescription(
			'RESTful API for Journify - A trusted, memorable, and enjoyable travel experience mobile application',
		)
		.setVersion('1.0')
		.addTag('Journify')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	const port = process.env.PORT || 3003;
	console.log('app running', port);
	await app.listen(port);
}
bootstrap();
