

import * as fs from 'fs';


const arregloRespuesta =[
    {
        tipo:"uno"
    }
]


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



readFile("data.json")
    .then(
        (contenido)=>{
            contenido
        }
    )
    .catch(
        (error)=>{
            console.log("error")
        }
    )
