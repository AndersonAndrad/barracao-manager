import { MongoInMemory } from 'src/infra/db/mongoose/mongo-memory/mongo-memory.service';

describe('Mongo in memory', () => {
  let mongoInMemory: MongoInMemory;

  beforeEach(async () => {
    mongoInMemory = await mongoInMemory.clearCollections();
  });
});
