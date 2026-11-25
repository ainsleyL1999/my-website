type ChatBubbleProps = {
  chatBubblePosition: "chat-start" | "chat-end";
  chatBubbleUserProfileText: string;
  chatBubbleUserName: string;
  chatBubbleText: string;
  chatBubbleFooter: string;
};

/**
 * Chat bubble with user information and message content.
 *
 * @param chatBubblePosition - The position of the chat bubble (start or end).
 * @param chatBubbleUserProfileText - The text to display in the user profile image.
 * @param chatBubbleUserName - The name of the user who sent the message.
 * @param chatBubbleText - The text content of the chat message.
 * @param chatBubbleFooter - The footer content for the chat bubble.
 */
export function ChatBubble({
  chatBubblePosition,
  chatBubbleUserProfileText,
  chatBubbleUserName,
  chatBubbleText,
  chatBubbleFooter,
}: ChatBubbleProps) {
  return (
    <div className={`chat ${chatBubblePosition}`}>
      <div className="chat-image avatar avatar-online avatar-placeholder">
        <div className="bg-[var(--colour-surface)] w-12 rounded-full text-[var(--colour-text)]">
          <span>{chatBubbleUserProfileText}</span>
        </div>
      </div>

      <div className="chat-header text-[var(--colour-text)]">
        {chatBubbleUserName}
      </div>

      <div className="chat-bubble bg-[var(--colour-surface)] text-[var(--colour-text)]">
        {chatBubbleText}
      </div>

      <div className="chat-footer text-[var(--colour-text)] opacity-70">
        {chatBubbleFooter}
      </div>
    </div>
  );
}
