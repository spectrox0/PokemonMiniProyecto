import { Url } from "url";

export interface Pokemon {
    _id: string,
    pkdx_id: number
    national_id: number,
    name: string,
    __v: number,
    image_url: string,
    description: string,
    art_url: string,
    types: [any],
    evolutions: [any]
}