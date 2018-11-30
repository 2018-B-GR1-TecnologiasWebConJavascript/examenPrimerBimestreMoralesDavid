
import * as fs from 'fs';
import {Observable, Observer} from "rxjs";



export const readFile = (fileName: string ): Promise<string> =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(
            fileName,
            'utf-8',
            (error, data)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(JSON.parse(data));
                }
            }
        );
    });
};



export const readTeamFile$ = (fileName: string): Observable<TeamInterface> =>{
    return Observable.create((observer: Observer<any>)=>{
        fs.readFile(fileName,'utf-8', (error, data: string)=>{
                if(error){
                    observer.error(error);
                }else{
                    const teams: TeamInterface[] = JSON.parse(data);
                    teams.forEach(team=>{
                        observer.next(team)
                    });
                    observer.complete();
                }
            }
        )
    });
};

export const filter=>{
    readTeamFile$('teamDB.json')
        .pipe(
            filter((data)=>{
                return data._teamName!=team._teamName;
            })
        )
        .subscribe(

        )
};
