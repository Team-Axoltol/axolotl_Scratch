const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const PG_URI = `postgres://yzopeivk:26kPr8Co8n47XjyVs7psVFv5qNSdHA6I@drona.db.elephantsql.com/yzopeivk`

const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = { query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};