import type Category from '../entities/category';
const config = useRuntimeConfig();

class CategoryService {
  baseURL = config.public.baseURL;

  async getAllCategories(): Promise<Category[]> {
    return $fetch(`${this.baseURL}/api/v1/categories`);
  }

  async getCategoryById(id: number): Promise<Category | null> {
    try {
      return await $fetch(`${this.baseURL}/api/v1/categories/${id}`);
    } catch (error) {
      console.error('Erro ao buscar a categoria', error);
      return null;
    }
  }

  async createCategory(categoryData: Partial<Category>): Promise<Category> {
    return $fetch(`${this.baseURL}/api/v1/categories`, {
      method: 'POST',
      body: categoryData,
    });
  }

  async updateCategory(
    id: number,
    updatedData: Partial<Category>
  ): Promise<Category> {
    return $fetch(`${this.baseURL}/api/v1/categories/${id}`, {
      method: 'PUT',
      body: updatedData,
    });
  }

  async deleteCategory(id: number): Promise<void> {
    await $fetch(`${this.baseURL}/api/v1/categories/${id}`, {
      method: 'DELETE',
    });
  }
}

export default new CategoryService();
