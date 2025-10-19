import { v4 as uuidv4 } from "uuid";

export const uploadFile = async (req) => {
  const fileId = uuidv4();
  const videoPath = req.file.path;
  const outputPath = `../uploads/final/${fileId}`;
  const hlsPath = `${outputPath}/index.m3u8`;
};
