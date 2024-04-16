import GridTableSwitcher from '@/components/GridTableSwitcher';
import { useViewStore } from '@/lib/store/view';
import { Group, Title } from '@mantine/core';
import FavoriteFiles from './views/FavoriteFiles';
import FileTable from './views/FileTable';
import Files from './views/Files';
import TagsButton from './tags/TagsButton';
import PendingFilesButton from './PendingFilesButton';

export default function DashbaordFiles() {
  const view = useViewStore((state) => state.files);

  return (
    <>
      <Group>
        <Title>Files</Title>

        <TagsButton />
        <PendingFilesButton />

        <GridTableSwitcher type='files' />
      </Group>

      {view === 'grid' ? (
        <>
          <FavoriteFiles />

          <Files />
        </>
      ) : (
        <FileTable />
      )}
    </>
  );
}
