declare module "react-speech-kit" {
  export function useSpeechRecognition(options?: ListeningOptions): {
    listen: () => Promise<void>;
    listening: boolean;
    stop: () => void;
    supported: boolean;
  };

  export interface ListeningOptions {
    lang?: string;
    interimResults?: boolean;
    continuous?: boolean;
    onResult: (result: SpeechRecognitionResultList) => void;
    onEnd?: () => void;
  }
}
