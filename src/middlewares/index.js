import morgan from 'morgan';
import helmet from 'helmet';

export const initMiddlewares = express => {
  express.use(helmet());
  express.use(morgan('dev'));
};
