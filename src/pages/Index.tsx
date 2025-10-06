import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ImageUpload } from "@/components/ImageUpload";
import { ResultDisplay } from "@/components/ResultDisplay";
import { AboutSection } from "@/components/AboutSection";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    prediction: "real" | "fake";
    confidence: number;
    processingTime?: number;
  } | null>(null);
  const { toast } = useToast();

  const handleImageSelect = async (file: File) => {
    setIsAnalyzing(true);
    setResult(null);

    try {
      const startTime = Date.now();

      // TODO: Replace with actual Hugging Face API call
      // Simulating API call for now
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock result - will be replaced with real API
      const mockResult = {
        prediction: Math.random() > 0.5 ? ("real" as const) : ("fake" as const),
        confidence: 0.85 + Math.random() * 0.15,
        processingTime: (Date.now() - startTime) / 1000,
      };

      setResult(mockResult);

      toast({
        title: "Analysis Complete",
        description: `Image classified as ${mockResult.prediction} with ${Math.round(mockResult.confidence * 100)}% confidence`,
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "An error occurred while analyzing the image. Please try again.",
        variant: "destructive",
      });
      console.error("Analysis error:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Upload & Analyze</h2>
            <p className="text-muted-foreground">
              Upload an image to check if it's authentic or AI-generated
            </p>
          </div>

          <ImageUpload onImageSelect={handleImageSelect} isAnalyzing={isAnalyzing} />
          <ResultDisplay result={result} />
        </div>
      </section>

      <AboutSection />

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Built with Vision Transformers &amp; Hugging Face • Developed by Ankit Negi
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Deepfake Detection System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
