
'use client';

import { useConversation } from '@11labs/react';
import { useCallback, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ElevenLabsConversation() {
  const [agentId, setAgentId] = useState<string>('');
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  
  const conversation = useConversation({
    onConnect: () => console.log('Connected to ElevenLabs agent'),
    onDisconnect: () => console.log('Disconnected from ElevenLabs agent'),
    onMessage: (message) => console.log('Message from agent:', message),
    onError: (error) => console.error('Error with ElevenLabs agent:', error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: agentId,
      });

    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation, agentId]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const handleSetupAgent = () => {
    if (agentId) {
      setIsConfigured(true);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>ElevenLabs Conversational AI</CardTitle>
      </CardHeader>
      <CardContent>
        {!isConfigured ? (
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Enter your ElevenLabs Agent ID to start a conversation
            </p>
            <input
              type="text"
              value={agentId}
              onChange={(e) => setAgentId(e.target.value)}
              placeholder="Enter your Agent ID"
              className="px-3 py-2 border rounded-md"
            />
            <Button onClick={handleSetupAgent} disabled={!agentId}>
              Set Up Agent
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              <Button
                onClick={startConversation}
                disabled={conversation.status === 'connected'}
                variant={conversation.status === 'connected' ? "outline" : "default"}
              >
                Start Conversation
              </Button>
              <Button
                onClick={stopConversation}
                disabled={conversation.status !== 'connected'}
                variant="destructive"
              >
                Stop Conversation
              </Button>
            </div>

            <div className="flex flex-col items-center text-sm">
              <p>Status: <span className="font-medium">{conversation.status}</span></p>
              <p>
                Agent is <span className="font-medium">{conversation.isSpeaking ? 'speaking' : 'listening'}</span>
              </p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        This feature requires microphone access and an ElevenLabs Agent ID
      </CardFooter>
    </Card>
  );
}
