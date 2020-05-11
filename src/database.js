import { connect } from 'mongoose';

(async () => {
  try {
    await connect('mongodb://localhost/graphql-users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected!');
  } catch (e) {
    console.log(e);
  }
})();
