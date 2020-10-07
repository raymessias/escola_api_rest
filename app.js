import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import alunoRoutes from './src/routes/alunoRoutes';
import userRoutes from './src/routes/userRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', alunoRoutes);
    this.app.use('/users/', userRoutes);
  }
}

export default new App().app;
