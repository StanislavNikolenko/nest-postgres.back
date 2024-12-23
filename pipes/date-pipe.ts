import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isDateString } from 'class-validator';

@Injectable()
export class DateValidationPipe implements PipeTransform {
  async transform(value: any) {
    if (!isDateString(value)) {
      throw new BadRequestException(`Invalid date format: ${value}`);
    }
    return value;
  }
}
