import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateAddresDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
  @Post('/:userId')
  async createAddress(
    @Body() createAddressDto: CreateAddresDto,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }
}
