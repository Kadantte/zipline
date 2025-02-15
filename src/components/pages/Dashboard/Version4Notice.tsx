import { Alert, Stack, Anchor, Code, Text } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';
import { useCallback, useEffect, useState } from 'react';

export default function Version4Notice() {
  const key = 'zipline-v4-notice';

  const [isClosed, setClosed] = useState<boolean | null>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(key) === 'true';
    setClosed(dismissed);
  }, [key]);

  const handleDismiss = useCallback(() => {
    setClosed(true);
    localStorage.setItem(key, 'true');
  }, [key]);

  if (isClosed === null) return null;
  if (isClosed) return null;

  return (
    <Alert
      withCloseButton
      variant='outline'
      icon={<IconExclamationCircle size='1rem' />}
      title='⚠️ Important! ⚠️'
      p='md'
      mb='md'
      onClose={handleDismiss}
      color='red'
    >
      <Stack spacing='md'>
        <Text>
          Zipline v4 will be released soon, and is <b>NOT</b> compatible with v3 (the current version). If you
          are using external software to automatically update Zipline on new releases, it is{' '}
          <b>strongly advised</b> that you stop auto-updates for the time being until v4 is released. For more
          information, please visit{' '}
          <Anchor target='_blank' href='https://github.com/diced/zipline/tree/v4'>
            the <Code>v4</Code> branch
          </Anchor>{' '}
          on GitHub to view the progress of v4. If you have any questions, feel free to{' '}
          <Anchor target='_blank' href='https://zipline.diced.sh/discord'>
            join our discord
          </Anchor>
          .
        </Text>

        <Text>
          If you are not the server administrator, please consider notifying them of this important message.
        </Text>
      </Stack>
    </Alert>
  );
}
