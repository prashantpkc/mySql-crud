// userController.js
const mysql = require("mysql2");
const mysqlConnection = require("../db/db");


exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    await mysqlConnection.promise().query(query, [name, email]);

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Failed to create user. Please try again later.' });
  }
};

//getuser by id for searching the specific user

exports.getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const query = 'SELECT * FROM users WHERE id = ?';
    const [results, fields] = await mysqlConnection.promise().query(query, [userId]);

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Error retrieving user:', error);
    return res.status(500).json({ error: 'Failed to retrieve user. Please try again later.' });
  }
};


//get all user

exports.getAllUsers = async(req, res) => {
  
}
