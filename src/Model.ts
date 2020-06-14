export type Action<T> = { type: string; payload: T };

export interface AvailableCar {
  name: string;
  img: string;
}
export type Element = {
  name: string;
  price: number;
};

export interface PickedCar {
    name: string;
    img: string;
    engines: Element[];
    drive: Element[];
    fuel: Element[];
} 

export type Target = "engine" | "drive" | "fuel"


export interface CustomizedCar {
  name: string;
  engine: string;
  engineCost: number;
  drive: string;
  driveCost: number;
  fuel: string;
  fuelCost: number;
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

export interface State {
  availableCars: AvailableCar[]
  carDetails: PickedCar | null,
  customizedCar: CustomizedCar
}
 



