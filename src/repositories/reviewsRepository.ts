import AbstractRepository from './abstractRepository'
import Review from '@/models/review'



export default class ReviewsRepository extends AbstractRepository<Review> {
  protected map(item: any): Review {
    const model = new Review()
    model.id = item.Id
    model.grade = item.Grade
    model.name = item.Name
    model.email = item.Email
    model.address = item.Address
    model.description = item.Description
    model.createdAt = Date.parse(item.CreatedAt)
    return model
  }

  public constructor() {
    super('/api/reviews')
  }

  public async createReview(model: Review): Promise<Review> {
    const response = await this.axios.post('', {
      Grade: model.grade,
      Name: model.name,
      Email: model.email,
      Address: model.address,
      Description: model.description,
    })
    return this.map(response.data)
  }

  public async getReviews(page: number): Promise<Review[]> {
    const response = await this.axios.get('', {
      params: {
        page,
      }
    })
    
    let models: Review[] = []
    response.data.forEach((item: any) => {
      models.push(this.map(item))
    });
    return models
  }

  public async getReview(id: number): Promise<Review> {
    const response = await this.axios.get(id.toString())
    return this.map(response.data)
  }

  public async deleteReview(id: number): Promise<Review> {
    const response = await this.axios.delete(id.toString())
    return this.map(response.data)
  }
}