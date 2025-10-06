import { CheckCircle, AlertTriangle, Shield, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ResultDisplayProps {
  result: {
    prediction: "real" | "fake";
    confidence: number;
    processingTime?: number;
  } | null;
}

export const ResultDisplay = ({ result }: ResultDisplayProps) => {
  if (!result) return null;

  const isReal = result.prediction === "real";
  const confidencePercent = Math.round(result.confidence * 100);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="bg-card border-border shadow-card">
        <CardContent className="p-8">
          <div className="flex items-center justify-center mb-6">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center ${
                isReal
                  ? "bg-success/20 animate-pulse-glow"
                  : "bg-destructive/20 animate-pulse-glow"
              }`}
            >
              {isReal ? (
                <CheckCircle className="w-10 h-10 text-success" />
              ) : (
                <AlertTriangle className="w-10 h-10 text-destructive" />
              )}
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">
              {isReal ? "Authentic Image" : "Deepfake Detected"}
            </h3>
            <p className="text-muted-foreground">
              {isReal
                ? "This image appears to be genuine"
                : "This image shows signs of AI manipulation"}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Confidence Score
                </span>
                <span className="text-sm font-bold">{confidencePercent}%</span>
              </div>
              <Progress
                value={confidencePercent}
                className="h-3"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Analysis Method</p>
                <p className="text-sm font-semibold">Vision Transformer</p>
              </div>
              {result.processingTime && (
                <div className="text-center">
                  <Activity className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Processing Time</p>
                  <p className="text-sm font-semibold">
                    {result.processingTime.toFixed(2)}s
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              {isReal
                ? "No manipulation patterns detected. The image passes authenticity checks."
                : "AI-generated patterns detected. This image may have been created or modified using deepfake technology."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
