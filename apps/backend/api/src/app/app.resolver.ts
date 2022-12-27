import { Query, Resolver } from '@nestjs/graphql';

@Resolver('app')
export class AppResolver {
  @Query(() => String)
  async test() {
    return "it's  Graphql";
  }
}
