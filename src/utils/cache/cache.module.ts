import { Module } from '@nestjs/common';
import { CacheModule as Cache } from '@nestjs/cache-manager';
import { CacheService } from './cache.service';

@Module({
  imports: [Cache.register({ ttl: 90000000 })],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
