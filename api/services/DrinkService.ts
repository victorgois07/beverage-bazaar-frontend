import type Drink from '../entities/drink';

class DrinkService {
  async getAllDrinks(): Promise<Drink[]> {
    return $fetch('/api/v1/drinks');
  }

  async getDrinkById(id: number): Promise<Drink | null> {
    try {
      return await $fetch(`/api/v1/drinks/${id}`);
    } catch (error) {
      console.error('Erro ao buscar a bebida', error);
      return null;
    }
  }

  async createDrink(drinkData: Partial<Drink>): Promise<Drink> {
    return $fetch('/api/v1/drinks', {
      method: 'POST',
      body: drinkData,
    });
  }

  async updateDrink(id: number, updatedData: Partial<Drink>): Promise<Drink> {
    return $fetch(`/api/v1/drinks/${id}`, {
      method: 'PUT',
      body: updatedData,
    });
  }

  async deleteDrink(id: number): Promise<void> {
    await $fetch(`/api/v1/drinks/${id}`, {
      method: 'DELETE',
    });
  }
}

export default new DrinkService();
