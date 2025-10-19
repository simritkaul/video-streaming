import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const config = {
  paths: {
    jobs: path.join(__dirname, "../../../jobs"),
    processing: path.join(__dirname, "../../../jobs/processing"),
    completed: path.join(__dirname, "../../../jobs/completed"),
    failed: path.join(__dirname, "../../../jobs/failed"),
  },
  worker: {
    pollInterval: 5000, // Check for new jobs every 5 seconds
  },
};
