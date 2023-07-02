import type { File } from '@/lib/db/models/file';
import { Box, Center, Group, Image, LoadingOverlay, Text, UnstyledButton } from '@mantine/core';
import { Icon, IconFileUnknown, IconPhotoCancel, IconPlayerPlay } from '@tabler/icons-react';

function PlaceholderContent({ text, Icon }: { text: string; Icon: Icon }) {
  return (
    <Group sx={(t) => ({ color: t.colors.dark[2] })}>
      <Icon size={48} />
      <Text size='md'>{text}</Text>
    </Group>
  );
}

function Placeholder({ text, Icon, ...props }: { text: string; Icon: Icon; onClick?: () => void }) {
  if (props.onClick)
    return (
      <UnstyledButton sx={{ height: 200 }} {...props}>
        <Center sx={{ height: 200 }}>
          <PlaceholderContent text={text} Icon={Icon} />
        </Center>
      </UnstyledButton>
    );

  return (
    <Box sx={{ height: 320 }} {...props}>
      <Center sx={{ height: 320 }}>
        <PlaceholderContent text={text} Icon={Icon} />
      </Center>
    </Box>
  );
}

export default function DashboardFileType({ file, show }: { file: File; show?: boolean }) {
  const type = file.type.split('/')[0];

  // const shouldRenderMarkdown = file.name.endsWith('.md');
  // const shouldRenderTex = file.name.endsWith('.tex');

  switch (type) {
    case 'video':
      return show ? (
        <video width='100%' autoPlay muted controls src={`/raw/${file.name}`} />
      ) : (
        <Placeholder text={`Click to play video ${file.name}`} Icon={IconPlayerPlay} />
      );
    case 'image':
      return (
        <Image
          styles={{
            imageWrapper: {
              position: 'inherit',
            },
            image: {
              maxHeight: 340,
            },
          }}
          placeholder={<PlaceholderContent Icon={IconPhotoCancel} text={'Image failed to load...'} />}
          src={`/raw/${file.name}`}
          alt={file.name}
          // width={!show ? 'auto' : undefined}
          width={show ? 'auto' : undefined}
        />
      );
    case 'audio':
      return show ? (
        <audio autoPlay muted controls style={{ width: '100%' }} src={`/raw/${file.name}`} />
      ) : (
        <Placeholder text={`Click to play audio ${file.name}`} Icon={IconPlayerPlay} />
      );
    case 'text':
      return (
        <>
          {/* {loading ? ( */}
          {/* <LoadingOverlay visible={loading} /> */}
          {/* ) : ( */}
          {/* <> */}
          {/* {(shouldRenderMarkdown || shouldRenderTex) && renderAlert()} */}
          {/* render - */}
          {/* </> */}
          {/* )} */}

          <LoadingOverlay visible />
        </>
      );
    default:
      return <Placeholder text={`Click to view file ${file.name}`} Icon={IconFileUnknown} />;
  }
}
