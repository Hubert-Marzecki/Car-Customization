export interface AvailableCar {
  name: string;
  img: string;
}
type Element = {
  name: string;
  price: number;
};

export interface PickedCarResponse {
  name: string;
  img: string;
  engines: Element[];
  drive: Element[];
  fuel: Element[];
}
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
 


// todo jak zmienić akcje w elementcah>
export type Action<T> = { type: string; payload: T };

// todo cost nie musi być w stanie może być zliczany na bierząco
