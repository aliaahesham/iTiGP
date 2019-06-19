import { AccessoriesService } from './accessories.service';
import { Accessories } from 'src/app/_models/accessories/accessories';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { reject } from 'q';
import { Injectable } from '@angular/core';
@Injectable()
export class AccessoriesResolver implements Resolve<Accessories>
{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Accessories> | Promise<Accessories> | Accessories
    {
       return new Promise((resolver,reject)=>{
        const id=+route.params.id;
        let accessories;
        setTimeout(() => {
            accessories=this.AccessoriesService.getById(id);
            resolver(accessories);
        }, 3000);
    
       })
    }
    constructor(private AccessoriesService:AccessoriesService){}
}

