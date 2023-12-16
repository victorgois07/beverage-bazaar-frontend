export default class Drink {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly categoryId: number,
    public readonly alcoholic: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}
}
