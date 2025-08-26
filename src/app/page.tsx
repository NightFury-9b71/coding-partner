'use client';

import React, { useState, useCallback } from 'react';
import { Send } from 'lucide-react';
import { PromptInput, PromptInputTextarea, PromptInputActions } from "@/components/ui/prompt-input";
import { Message, MessageContent, MessageAvatar } from "@/components/ui/message";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import EmotionTags from '@/components/EmotionTags';
import { ChatMessage } from '@/types/chat';
import { initialChatMessages } from '@/data/chat-messages';
import { generateMockEmotions } from '@/utils/emotion-generator';

const ChatInterface: React.FC = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages);

  const handleSend = useCallback(() => {
    if (!inputMessage.trim()) return;
    setMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        role: 'user',
        content: inputMessage,
        emotions: generateMockEmotions(),
        timestamp: new Date()
      }
    ]);
    setInputMessage('');
  }, [inputMessage]);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Chat Messages Container */}
      <div className="flex-1 p-4 pb-0">
        <div className="max-w-4xl mx-auto h-full flex flex-col">

          <div className="flex-1 space-y-4 overflow-y-auto mb-4" role="log" aria-label="Chat messages">
            
            {messages.map(message => (

              <Message key={message.id} className={message.role === 'user' ? 'flex-row-reverse' : ''}>
                <MessageAvatar
                  src={message.role === 'user' ? '/user-avatar.png' : '/ai-avatar.svg'}
                  alt={message.role === 'user' ? 'User' : 'Assistant'}
                  fallback={message.role === 'user' ? 'U' : 'AI'}
                />
                
                <div className={`flex-1 min-w-0 ${message.role === 'user' ? 'flex flex-col items-end' : ''}`}>
                
                    <MessageContent 
                      markdown={true}
                      className={`${message.role === 'user' ? 'text-primary-foreground bg-primary' : 'text-card-foreground bg-card border border-border'}`}
                    >
                      {message.content}
                    </MessageContent>
                  
                  {/* Emotion Tags */}
                  <EmotionTags 
                    emotions={message.emotions}
                    align={message.role === 'user' ? 'right' : 'left'}
                  />
                </div>

              </Message>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <footer className="border-t border-border bg-background/95 backdrop-blur-sm p-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <PromptInput
            value={inputMessage}
            onValueChange={setInputMessage}
            onSubmit={handleSend}
            className="w-full shadow-sm"
          >
            <PromptInputTextarea
              placeholder="Type your message..."
              className="resize-none"
            />
            <PromptInputActions>
              <button 
                type="button" 
                onClick={handleSend} 
                disabled={!inputMessage.trim()}
                className="bg-teal-600 hover:bg-teal-700 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors duration-200"
                aria-label="Send message"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </PromptInputActions>
          </PromptInput>
        </div>
      </footer>
    </main>
  );
};

export default ChatInterface;
