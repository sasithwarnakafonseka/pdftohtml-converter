import { ApiProperty } from '@nestjs/swagger';

export class ImportDto {
    @ApiProperty({ type:'string', format:'binary' })
    file: any;
}