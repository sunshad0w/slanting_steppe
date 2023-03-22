import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserEntity } from './entities/user.entity';
import { UserResolver } from './resolvers/user.resolver';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([UserEntity])],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {}
