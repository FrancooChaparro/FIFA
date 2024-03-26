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
    LocalResultado: number;
    VisitanteEscudo: string;
    VisitanteNombre: string;
    VisitanteResultado: number;
  }
  
  export type MatchWithoutPlayers = Omit<Match, 'Player1' | 'Player2'>;

  export interface MatchStats {
    win: number;
    loss: number;
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
  