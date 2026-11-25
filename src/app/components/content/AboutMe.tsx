import { ChatBubble } from "@/app/components/ChatBubble";

export function AboutMe() {
  return (
    <div className="space-y-8">
      <ChatBubble
        chatBubblePosition="chat-start"
        chatBubbleUserProfileText="AL"
        chatBubbleUserName="Ainsley Liyanagedara"
        chatBubbleText="Hey, I am Ainsley. Ask me a question to get to know me better!"
        chatBubbleFooter="Delivered"
      />
    </div>
  );
}
