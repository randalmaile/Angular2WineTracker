
import { Pipe, PipeTransform } from '@angular/core'; // need to import Pipe and PT interface, one for the decorator and one for the service
import { IWines } from '../wines/wines';

// Decorators are uppercase!!!
@Pipe({
    name: 'tableFilter'
})

export class TableFilterPipe implements PipeTransform {
    
    transform(value: IWines[], args: string[]): IWines[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase(): null;
        return filter ? value.filter((wine: IWines) => 
            wine.wineName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}