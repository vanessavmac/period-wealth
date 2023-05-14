import locationsService from "./locations.js";

async function getAll(req, res) {
  try {
    const locations = await locationsService.getAll();
    res.status(201).json(locations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function getLocation(req, res) {
  try {
    const location = await locationsService.getLocation(req.query);
    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export default { getAll, getLocation };
