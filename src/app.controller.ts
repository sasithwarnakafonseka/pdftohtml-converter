import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ImportDto } from './dto/file.dto';

@Controller('converter')
@ApiTags('CONVERTER')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/pdf2html')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  pdf2html(@Body() uploadDto: ImportDto,@UploadedFile() file: Express.Multer.File) {
    return this.appService.pdf2html(file);
  }

  @Post('/poppler')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  poppler(@UploadedFile() file: Express.Multer.File) {
    return this.appService.poppler(file);
  }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File): void {
    console.log(file)
  }
}
