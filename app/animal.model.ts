export class Animal {
  created: string = "June 09, 2017";
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public diet: string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string[],
    public dislikes: string[],
  )
}
