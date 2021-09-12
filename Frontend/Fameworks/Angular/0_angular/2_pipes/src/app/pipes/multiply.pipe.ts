import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform{
  transform(value: any, ...args: any[    ]): any {
  }
}
