
'use client';

import { useConversation } from '@11labs/react';
import { useCallback, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function ElevenLabsConversation() {
  const [agentId, setAgentId] = useState<string>('C6DAdeHLXXHPNrJnf5kq');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const { toast } = useToast();
  
  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs agent');
      toast({
        title: "Connected",
        description: "You're now connected to the AI assistant",
      });
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs agent');
      toast({
        title: "Disconnected",
        description: "You've been disconnected from the AI assistant",
        variant: "destructive",
      });
    },
    onMessage: (message) => {
      console.log('Message from agent:', message);
      if (message.role && message.content) {
        setMessages(prev => [...prev, message]);
      }
    },
    onError: (error) => {
      console.error('Error with ElevenLabs agent:', error);
      toast({
        title: "Error",
        description: "There was an issue connecting to the AI assistant",
        variant: "destructive",
      });
    },
  });

  const startConversation = useCallback(async () => {
    try {
      setMessages([]);
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with the agent
      await conversation.startSession({
        agentId: agentId,
      });

      toast({
        title: "Started",
        description: "You can start speaking to the assistant now",
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
      toast({
        title: "Permission Error",
        description: "Please allow microphone access to use this feature",
        variant: "destructive",
      });
    }
  }, [conversation, agentId, toast]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
    toast({
      title: "Ended",
      description: "Conversation has ended",
    });
  }, [conversation, toast]);

  const toggleMute = useCallback(async () => {
    try {
      await conversation.setVolume({ volume: isMuted ? 1.0 : 0.0 });
      setIsMuted(!isMuted);
    } catch (error) {
      console.error('Failed to change volume:', error);
    }
  }, [conversation, isMuted]);

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (conversation.status === 'connected') {
        conversation.endSession();
      }
    };
  }, [conversation]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            onClick={startConversation}
            disabled={conversation.status === 'connected'}
            variant={conversation.status === 'connected' ? "outline" : "default"}
            className="w-36"
          >
            <Mic className="mr-2 h-4 w-4" />
            {conversation.status === 'connected' ? 'Connected' : 'Start Chat'}
          </Button>
          
          <Button
            onClick={stopConversation}
            disabled={conversation.status !== 'connected'}
            variant="destructive"
            className="w-36"
          >
            <MicOff className="mr-2 h-4 w-4" />
            Stop Chat
          </Button>
        </div>
        
        {conversation.status === 'connected' && (
          <Button
            onClick={toggleMute}
            variant="outline"
            size="icon"
            className="h-10 w-10"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        )}
      </div>

      <Card className="min-h-[400px] max-h-[400px] overflow-y-auto">
        <CardContent className="p-4 space-y-4">
          {messages.length === 0 && conversation.status !== 'connected' && (
            <div className="flex items-center justify-center h-[360px] text-muted-foreground text-center">
              <div>
                <p>Press "Start Chat" and allow microphone access</p>
                <p className="text-sm mt-2">Then simply speak naturally to the assistant</p>
              </div>
            </div>
          )}
          
          {messages.length === 0 && conversation.status === 'connected' && (
            <div className="flex items-center justify-center h-[360px] text-muted-foreground text-center">
              <div>
                <p>
                  {conversation.isSpeaking 
                    ? "Assistant is speaking..." 
                    : "Assistant is listening. Speak now..."
                  }
                </p>
              </div>
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`p-3 rounded-lg ${
                msg.role === 'assistant' 
                  ? 'bg-muted ml-4' 
                  : 'bg-primary/10 mr-4'
              }`}
            >
              <p className="text-xs font-semibold mb-1">
                {msg.role === 'assistant' ? 'Assistant' : 'You'}
              </p>
              <p>{msg.content}</p>
            </div>
          ))}
        </CardContent>
        
        <CardFooter className="border-t px-4 py-3 text-xs text-muted-foreground">
          <div className="flex w-full justify-between items-center">
            <span>
              Status: <span className="font-medium">{conversation.status}</span>
            </span>
            {conversation.status === 'connected' && (
              <span>
                {conversation.isSpeaking ? 'Assistant is speaking' : 'Assistant is listening'}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
