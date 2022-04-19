import Post from "./Post";
import {Model, DataTypes} from 'sequelize';
import {hash} from 'bcrypt';
import db from "../db";

class User extends Model {}

// User.hasMany(Post)

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {isEmail: true}
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active',
    validate: {isIn: [['active', 'suspended']]}
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'editor',
    validate: {
      isIn: [['editor', 'admin', 'moderator', 'subadmin', 'user']]
    }
  },
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'users'
});

export default User;