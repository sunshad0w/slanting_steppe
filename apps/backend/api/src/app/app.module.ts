import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { resolverMap } from './app.resolver';
// import { databaseProviders } from './database/database.providers';
import { environment } from '../environments/environment';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    /* TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity],
      migrations: [User1679026308386],
      migrationsRun: true,
    }),*/
    /*  TypeOrmModule.forRootAsync({
      useFactory: () => ({ ...getTypeOrmModuleOptions() }),
    }),*/
    SequelizeModule.forRoot({
      dialect: environment.connection.type,
      host: environment.connection.host,
      port: environment.connection.port,
      username: environment.connection.username,
      password: environment.connection.password,
      database: environment.connection.database,
      autoLoadModels: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.gql'],
      context: ({ req }) => ({ req }),
      playground: true,
      driver: ApolloDriver,
      resolvers: [resolverMap],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  // providers: [...databaseProviders],
})
export class AppModule {}
