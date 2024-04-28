import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    // {
    //   provide: 'External', nome criado
    //   useClass: Repository;
    // } usar quando a classe não tem dependecia no construtor
    // {
    //   provide: 'Hash',
    //   useClass: Bcrypt;
    // }
    // {
    //   provide: Usecase,
    //   useFactory(External: Repository, Hash: Bcrypt) {
    //     return new UseCase(External, Hash);
    //   },
    //   inject: ['External', 'Hash'],
    // }, deve ser usada quan há dependecia no construtor
  ],
})
export class UsersModule {}
