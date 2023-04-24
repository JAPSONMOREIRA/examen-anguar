export interface IPokemon {
    count: number
    next: String
    previous: String
    results: IDataPokemon[]
}

export interface IDataPokemon {
    name: string
    url: number
}