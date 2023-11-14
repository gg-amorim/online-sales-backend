import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from 'src/utils/cache/cache.module';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity]), CacheModule],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
