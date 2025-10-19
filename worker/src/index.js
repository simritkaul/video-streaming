import { config } from "./config/config.js";
import { JobProcessor } from "./services/job-processor.js";

const jobProcessor = new JobProcessor(config);
jobProcessor.start();
