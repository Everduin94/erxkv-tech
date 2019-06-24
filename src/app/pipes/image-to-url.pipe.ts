import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageToUrl'
})
export class ImageToUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const result = "https:" + value.fields.file.url;
    return result;
  }

}
