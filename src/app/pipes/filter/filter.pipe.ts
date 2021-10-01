import { Pipe, PipeTransform } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(jobAdvertisements: JobAdvertisement, filterText: string): JobAdvertisement {
    return null;
  }

 


}
