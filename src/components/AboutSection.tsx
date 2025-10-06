import { Brain, Database, Lock, Cpu, Shield } from "lucide-react";
import aiDetectionIcon from "@/assets/ai-detection-icon.png";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img
              src={aiDetectionIcon}
              alt="AI Detection"
              className="w-24 h-24 mx-auto mb-6 animate-float"
            />
            <h2 className="text-4xl font-bold mb-4">
              How Does It Work?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our system uses state-of-the-art Vision Transformer (ViT) models
              to analyze images and detect deepfake manipulation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Vision Transformers</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced neural network architecture that excels at
                    understanding visual patterns and detecting subtle
                    inconsistencies in images
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Trained on Millions</h3>
                  <p className="text-sm text-muted-foreground">
                    Our model is trained on extensive datasets containing both
                    real and AI-generated images to ensure high accuracy
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your images are analyzed securely and are not stored or
                    shared. We prioritize your privacy and data security
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Real-Time Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Powered by Hugging Face infrastructure for fast and
                    reliable inference on cloud-based GPU instances
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-primary rounded-lg p-8 text-center shadow-glow-strong">
            <h3 className="text-2xl font-bold mb-3">Combat Misinformation</h3>
            <p className="text-foreground/90 mb-4">
              Deepfake technology poses serious threats to digital trust,
              security, and privacy. Our AI-powered detection system helps
              identify manipulated content to protect against misinformation.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium">
              <Shield className="w-5 h-5" />
              <span>Trusted by security researchers and digital forensics teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
