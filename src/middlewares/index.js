import morgan from 'morgan';
import helmet from 'helmet';

export const initMiddlewares = ({ use }) => {
  use(helmet());
  use(morgan('dev'));
};
