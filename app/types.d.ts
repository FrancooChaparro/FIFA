export interface Team { 
    nombre: string
    escudo: any
}

export interface Match {
    Player1: string;
    Player2: string;
    Result: string;
    LocalEscudo: string;
    LocalNombre: string;
    LocalResultado: any;
    VisitanteEscudo: string;
    VisitanteNombre: string;
    VisitanteResultado: any;
    Raiz?: string;
  }
  
  export type MatchWithoutPlayers = Omit<Match, 'Player1' | 'Player2'>;

  export interface MatchStats {
    win: number;
    loss: number;
    draw?: number;
    porcent: string;
  }
  
  export interface Person { 
    finals: { 
      matchs: MatchWithoutPlayers[];
      stats: MatchStats;
    }
    clasics: { 
      matchs: MatchWithoutPlayers[];
      stats: MatchStats;
    }
  }
  
  export interface Externals {
    Games: Match[];
    best_match: Match[];
    torneos: Match[];
  }

export interface AppState {
    gaston: Array<Team> | [];
    marcos: Array<Team> | [];
    franco: Array<Team> | [];
    francoBombo: Array<Team> | [];
    gastonBombo: Array<Team> | [];
    marcosBombo: Array<Team> | [];
  };
  
export interface Rank {
  logo: string;
  name: string;
  rank: number;
  titles: number;
}

export interface poster {
  image: string;
  alt: string;
  title: string;
  description: string;
}
export interface Rank {
  logo: string;
  name: string;
  rank: number;
  titles: number;
}
export interface Data {
  poster: Array<poster>;
  new: Array<poster>;
  ranking: Array<Rank>;
}