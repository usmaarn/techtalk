import {Model, DataTypes} from "sequelize";
import db from "../db";

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
    set() {
      const slug = this.getDataValue('title').replaceAll(' ', '-').toLowerCase()
      this.setDataValue('slug', slug)
    }
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 50,
    }
  }
}, {
  sequelize: db,
  tableName: 'posts'
});

export default Post;