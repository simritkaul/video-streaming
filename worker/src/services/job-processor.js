import fs from "fs";
import path from "path";
import { VideoProcessor } from "./video-processor.js";

export class JobProcessor {
  constructor(config) {
    this.config = config;
    this.videoProcessor = new VideoProcessor();
    this.ensureDirectories();
  }

  ensureDirectories() {
    Object.values(this.config.paths).forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async processNextJob() {
    try {
      // Get all pending jobs
      const jobs = fs
        .readdirSync(this.config.paths.jobs)
        .filter((file) => file.endsWith(".json"))
        .map((file) => path.join(this.config.paths.jobs, file));

      if (jobs.length === 0) {
        return;
      }

      // Take the first job (FIFO)
      const jobFile = jobs[0];
      const jobFileName = path.basename(jobFile);

      // Move to processing
      const processingPath = path.join(
        this.config.paths.processing,
        jobFileName
      );
      fs.renameSync(jobFile, processingPath);

      // Read job data
      const jobData = JSON.parse(fs.readFileSync(processingPath, "utf8"));

      try {
        // Process the video
        await this.videoProcessor.createHLSStream(
          jobData.videoPath,
          jobData.outputPath
        );

        // Move to completed
        fs.renameSync(
          processingPath,
          path.join(this.config.paths.completed, jobFileName)
        );
        console.log(`✅ Job completed: ${jobFileName}`);
      } catch (error) {
        // Move to failed
        fs.renameSync(
          processingPath,
          path.join(this.config.paths.failed, jobFileName)
        );
        console.error(`❌ Job failed: ${jobFileName}`, error);
      }
    } catch (error) {
      console.error("Error processing job:", error);
    }
  }

  start() {
    console.log("🚀 Worker started. Watching for new jobs...");
    setInterval(() => this.processNextJob(), this.config.worker.pollInterval);
  }
}
