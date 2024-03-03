import app from './app';
import { connect } from './database';

import Logger from './logger';

const PORT = process.env.WEB_PORT || 8000;

connect();
app.listen(PORT, () => {
  Logger.scan(`Server is running on port ${PORT}`);
});
