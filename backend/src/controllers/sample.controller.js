import * as sampleService from "../services/sample.service.js";

export const sayHello = async (req, res, next) => {
  try {
    const helloRes = await sampleService.sayHello();
    res.json(helloRes);
  } catch (error) {
    next(error);
  }
};
