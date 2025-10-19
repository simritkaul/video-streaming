import fs from "fs";
import path from "path";

export class VideoProcessor {
  async createHLSStream(videoPath, outputDir) {
    return new Promise((resolve, reject) => {
      // Ensure output directory exists
      // if (!fs.existsSync(outputDir)) {
      //   fs.mkdirSync(outputDir, { recursive: true });
      // }
      // ffmpeg(videoPath)
      //   .addOptions([
      //     "-profile:v baseline",
      //     "-level 3.0",
      //     "-start_number 0",
      //     "-hls_time 10",
      //     "-hls_list_size 0",
      //     "-f hls",
      //   ])
      //   .output(path.join(outputDir, "index.m3u8"))
      //   .on("end", () => {
      //     console.log("HLS conversion completed");
      //     resolve();
      //   })
      //   .on("error", (error) => {
      //     console.error("Error during HLS conversion:", error);
      //     reject(error);
      //   })
      //   .run();
    });
  }
}
