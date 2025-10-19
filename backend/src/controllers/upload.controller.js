import * as uploadService from "../services/upload.service.js";

export const uploadFile = async (req, res) => {
  return await uploadService.uploadFile(req);
};
