import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should  be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@example1.com',
      name: 'User Example',
    });

    expect(response.status).toBe(201);
  });

  it('Should note be able to create a user wth exist email', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@example1.com',
      name: 'User Example',
    });

    expect(response.status).toBe(400);
  });
});
