import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async find(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOneByUserName(username: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ username });
  }

  async findOneById(id: number): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ id });
  }

  async createUser(
    user: Omit<UserEntity, 'id' | 'created' | 'updated'>
  ): Promise<UserEntity> {
    return this.userRepository.save(await this.userRepository.create(user));
  }
}
