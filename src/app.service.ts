import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  async poppler(file: Express.Multer.File) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Poppler } = require('node-poppler');

    const poppler = new Poppler('/opt/homebrew/Cellar/poppler/22.06.0_2/bin');
    const options = {
      firstPageToConvert: 1,
      lastPageToConvert: 2,
    };

    poppler.pdfToHtml(file, 'tester.html', options).then((res) => {
      console.log(res);
    });
  }
  pdf2html(file: Express.Multer.File) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pdf2html = require('pdf2html');
    pdf2html.html(file, (err: string, htmlPages: any) => {
      if (err) {
        console.error('Conversion error: ' + err);
      } else {
        console.log(htmlPages);
      }
    });
  }
}
