

export interface ListaHeroisResponse{
    
    name: string;
    
    
    thumbnail: thumbModel[] | undefined;
    path:  string;
  }
  
  export class thumbModel{
    path: string | undefined;
  }

  export class Hero{
      name: string | undefined;
      path: string | undefined;
      nomeSerie: string  | undefined;
  }
  