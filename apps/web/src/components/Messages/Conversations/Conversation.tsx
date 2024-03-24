import type { CachedConversation } from '@xmtp/react-sdk';
import type { FC } from 'react';
import type { Address } from 'viem';

import cn from '@hey/ui/cn';
import { useMessagesStore } from 'src/store/non-persisted/useMessagesStore';

import User from './User';

interface ConversationProps {
  conversation: CachedConversation;
}

const Conversation: FC<ConversationProps> = ({ conversation }) => {
  const {
    selectedConversation,
    setNewConversationAddress,
    setSelectedConversation
  } = useMessagesStore();

  return (
    <div
      className={cn(
        {
          'bg-gray-100 dark:bg-gray-800':
            selectedConversation?.id === conversation.id
        },
        'cursor-pointer px-5 py-3'
      )}
      onClick={() => {
        setNewConversationAddress(null);
        setSelectedConversation(conversation);
      }}
    >
      <User
        address={conversation.peerAddress as Address}
        conversation={conversation}
      />
    </div>
  );
};

export default Conversation;