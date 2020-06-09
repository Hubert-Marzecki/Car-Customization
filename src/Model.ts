export interface CarsModels {
    name:string,
    img:string
}
type Elements = {
    name:string,
    price:number
}

export interface PickedCar {
    name:string,
    img: string,
    engines: Elements[],
    drive: Elements[],
    fuel: Elements[],
}
export interface FinalCar {
    name: string,
    engine:string,
    engineCost:number,
    drive:string,
    driveCost:number,
    fuel:string,
    fuelCost:number,
    cost:number
    color:{
        r: number,
        g: number,
        b: number,
        a: number,
    }
}

export interface State {
    carsModels: CarsModels[],
    pickedCar: PickedCar,
    finalCar: FinalCar
}