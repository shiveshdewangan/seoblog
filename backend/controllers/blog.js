exports.time = (req, res) => {
  console.log("Blog Controller");
  res.json({
    time: Date().toString()
  });
};
