import {Entity, model, property} from '@loopback/repository';

@model()
export class Productmodel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  prodId?: number;

  @property({
    type: 'string',
    required: true,
  })
  prodTitle: string;

  @property({
    type: 'string',
    required: true,
  })
  prodDescription: string;

  @property({
    type: 'number',
    required: true,
  })
  prodPrice: number;


  constructor(data?: Partial<Productmodel>) {
    super(data);
  }
}

export interface ProductmodelRelations {
  // describe navigational properties here
}

export type ProductmodelWithRelations = Productmodel & ProductmodelRelations;
