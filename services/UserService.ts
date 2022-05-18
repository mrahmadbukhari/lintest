import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../repositories/UserRepository';
//0.2.5
@Service()
export class UserService {

    constructor(
        @OrmRepository() 
        private repo: UserRepository
        ) {}
    // create 
    public async create(user: any): Promise<any> {
        return this.repo.save(user);
    }
    // insert
    public async insert(user: any): Promise<any> {
        return this.repo.insert(user);
    }
    // delete
    public async delete(id: number): Promise<any> {
        return await this.repo.delete(id);
    }
    // find Condition
    public findOne(user: any): Promise<any> {
        return this.repo.findOne(user);
    }
    // find Condition
    public findAll(): Promise<any> {
        return this.repo.find();
    }
    // find Condition
    public find(data: any): Promise<any> {
        return this.repo.find(data);
    }
    // update user
    public update(id: any, user: any): Promise<any> {
        user.userId = id;
        return this.repo.save(user);
    }
}
