module.exports = (sequelize, DataTypes) => {
  const Upload = sequelize.define('upload', {
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nameOfContest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Upload;
}