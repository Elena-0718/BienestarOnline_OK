import { ConflictException, Injectable } from '@nestjs/common';
import { SupportRepository } from './support.repository';

@Injectable()
export class SupportService {
constructor(private readonly supportRepository: SupportRepository) {}

    getProductByIdService(id: string) {
        const existingProduct = this.supportRepository.existingProductProductById(id);
        if (!existingProduct) {
            throw new ConflictException('Este producto no existe');
        }
        return existingProduct;
    }
}

