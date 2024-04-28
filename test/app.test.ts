import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

describe('Teste Integração Db', () => {
  let prismaService: PrismaClient;
  beforeAll(async () => {
    execSync(
      'npx dotenv-cli -e .env.test -- npx prisma migrate deploy  --schema ./src/shared/database/prisma/schema.prisma',
    );
    prismaService = new PrismaClient();
    await prismaService.$connect();
  });

  beforeEach(async () => {
    await prismaService.user.deleteMany();
  });

  afterAll(async () => {
    await prismaService.$disconnect();
  });
});
