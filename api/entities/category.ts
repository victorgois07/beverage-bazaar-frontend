export default class Category {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {}
}
