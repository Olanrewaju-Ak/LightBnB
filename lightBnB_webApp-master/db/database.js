const properties = require('./json/properties.json');
const users = require('./json/users.json');

//Connecting to the lightbnb database
const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'lightbnb'
});

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  // let resolvedUser = null;
  let query = `SELECT * 
		FROM users
		WHERE users.email = $1`;
  let options = [email];
  return pool
    .query(query, options)
    .then((result) => {
      console.log(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  let query = `SELECT * 
		FROM users
		WHERE id = $1`;
  let options = [id];
  return pool
    .query(query, options)
    .then((result) => {
      console.log('it ran');
      console.log(result.rows);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  let query = `INSERT INTO users(name,email,password) VALUES ($1,$2,$3) RETURNING *;`;
  let options = [user.name, user.email, user.password];
  return pool
    .query(query, options)
    .then((result) => {
      console.log(result);
      return result.rows[0];
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  //return getAllProperties(null, 2);
  let query = `SELECT reservations.id, title, start_date, cost_per_night, avg(property_reviews.rating) as average_rating
FROM reservations
JOIN properties ON reservations.property_id = properties.id
JOIN property_reviews ON properties.id = property_reviews.property_id
WHERE reservations.guest_id = $1
GROUP BY properties.id,reservations.id
ORDER BY start_date
LIMIT $2
`;
  let options = [guest_id, limit];
  return pool
    .query(query, options)
    .then((result) => {
      console.log(result);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function (options, limit = 10) {
  /*<------------------ ADDING DATABASE QUERY    ------------------------>*/
  return pool
    .query(
      `SELECT *
		FROM properties
		LIMIT $1`,
      [limit]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });

 
};

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};

module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty
};
