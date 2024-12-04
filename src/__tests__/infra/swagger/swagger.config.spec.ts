// import { INestApplication } from '@nestjs/common';
// import { SwaggerModule } from '@nestjs/swagger';
// import swaggerConfig from '../../../infra/swagger/swagger.config';

// describe('Swagger config', () => {
//   let mockApplication: INestApplication;

//   beforeEach(() => {
//     mockApplication = {
//       getHttpAdapter: jest.fn().mockReturnValue({
//         get: jest.fn().mockReturnValue({
//           httpAdapter: jest.fn(),
//         }),
//       }),
//     } as any;
//   });
//   // httpAdapter.getType
//   it('should initialize Swagger with the correct configuration', () => {
//     const swaggerModuleSpy = jest.spyOn(SwaggerModule, 'setup');
//     const createDocumentSpy = jest
//       .spyOn(SwaggerModule, 'createDocument')
//       .mockReturnValue({} as any);

//     swaggerConfig.initSwagger(mockApplication);

//     expect(createDocumentSpy).toHaveBeenCalledWith(
//       mockApplication,
//       swaggerConfig['config'],
//     );
//     expect(swaggerModuleSpy).toHaveBeenCalledWith(
//       'api-doc',
//       mockApplication,
//       {},
//     );
//   });
// });

// // describe('SwaggerConfig', () => {
// //   let mockApplication: INestApplication;

// //   beforeEach(() => {
// //     mockApplication = {} as INestApplication; // Mock the Nest application instance
// //   });

// //   it('should have a default configuration set with the application name and version', () => {
// //     const expectedConfig = new DocumentBuilder()
// //       .setTitle(process.env.APPLICATION_NAME_SWAGGER || 'Application swagger')
// //       .setDescription('')
// //       .setVersion('0.1')
// //       .addTag('')
// //       .build();

// //     expect(swaggerConfig['config']).toEqual(expectedConfig);
// //   });
// // });
