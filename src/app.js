import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexsRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use(indexsRoutes);
app.use('/api', employeesRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: 'EndPoint Not Found',
  });
});

export default app;
