import config from './';

const {
  APP_SETTINGS: { PORT },
} = config;

export default {
  playground: process.env.NODE_ENV === 'production' ? false : '/',
  endpoint: '/graphql',
  port: PORT,
};
