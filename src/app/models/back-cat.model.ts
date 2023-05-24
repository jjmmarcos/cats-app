export interface BackCat {
    id?: string,
    img: string,
    name: string,
    description: string,
    weight: string,
    temperament: string,
    origin: string,
    life_span: string,
    [key: string]: string | undefined;
}