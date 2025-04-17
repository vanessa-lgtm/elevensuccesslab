
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ModelsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-primary">Learn about our models</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Our Flagship Models</DialogTitle>
          <DialogDescription className="text-lg mt-2">
            Our flagship models are built to cover the full spectrum of enterprise audio needs — from ultra-realistic speech to real-time synthesis and multilingual use cases. Meet our flagship models and find the right fit for your product.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-8 mt-6">
          {/* Eleven Multilingual v2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Eleven Multilingual v2</h3>
            <p className="font-medium">Lifelike, emotionally rich speech synthesis model</p>
            <p className="text-muted-foreground">
              Our most advanced, emotionally-aware speech synthesis model. It produces natural, lifelike speech with a wide emotional range and strong contextual understanding across 29 supported languages. Ideal for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Audiobook production: Perfect for long-form narration with complex emotional delivery</li>
              <li>Character voiceovers: Ideal for gaming and animation thanks to expressive range</li>
              <li>Professional content: Well-suited for corporate videos and e-learning materials</li>
              <li>Multilingual projects: Maintains consistent voice identity across languages</li>
            </ul>
          </div>

          {/* Eleven Flash v2.5 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Eleven Flash v2.5</h3>
            <p className="font-medium">Ultra-low latency, affordable speech synthesis model</p>
            <p className="text-muted-foreground">
              Our fastest speech synthesis model, built for real-time and high-volume use cases. Flash v2.5 delivers high-quality speech at ultra-low latency (~75ms) across 32 languages. It's cost-effective, scalable, and optimized for performance. Ideal for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Conversational AI: Real-time voice agents and chatbots</li>
              <li>Interactive apps: Games and applications requiring immediate response</li>
              <li>Large-scale processing: Efficient for bulk text-to-speech conversion</li>
            </ul>
          </div>

          {/* Eleven Scribe v1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Eleven Scribe v1</h3>
            <p className="font-medium">State-of-the-art speech recognition model</p>
            <p className="text-muted-foreground">
              Our speech recognition model for transcription and speech analysis. Scribe v1 supports 99 languages and includes word-level timestamping, speaker diarization for multi-speaker recordings, and dynamic audio tagging for enhanced context. It's built to handle complex, multilingual audio at scale. Ideal for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Transcription services: Accurate conversion of audio/video to text</li>
              <li>Meeting documentation: Capture and document conversations with speaker tracking</li>
              <li>Content analysis: Process large volumes of spoken content</li>
              <li>Multilingual transcription: Accurate recognition across 99 languages</li>
            </ul>
          </div>

          {/* Model Selection Guide */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Model Selection Guide</h3>
            <p className="font-medium">Select the right model for your use case</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Need high-quality, expressive audio? Use Eleven Multilingual v2</li>
              <li>Need real-time performance? Use Eleven Flash v2.5</li>
              <li>Need multilingual + low latency? Use Multilingual v2 or Flash v2.5, depending on whether quality or speed is more important to your use case.</li>
              <li>Need accurate transcription? Use Scribe v1</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button asChild className="gap-2">
            <a href="https://elevenlabs.io/docs" target="_blank" rel="noopener noreferrer">
              View Documentation
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModelsDialog;
