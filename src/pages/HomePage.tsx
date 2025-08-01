import Stack from '@mui/material/Stack';
import { COMMON_TITLES } from 'src/constant';
import HeroSection from 'src/components/HeroSection';
import { genreSliceEndpoints, useGetGenresQuery } from 'src/store/slices/genre';
import { MEDIA_TYPE } from 'src/types/Common';
import { CustomGenre, Genre } from 'src/types/Genre';
import store from 'src/store';

const Placeholder = () => <div>Component coming soon...</div>;
export async function loader() {
  await store.dispatch(genreSliceEndpoints.getGenres.initiate(MEDIA_TYPE.Movie));
  return null;
}
export function Component() {
  const { data: genres, isSuccess } = useGetGenresQuery(MEDIA_TYPE.Movie);

  if (isSuccess && genres && genres.length > 0) {
    return (
      <Stack spacing={2}>
        <HeroSection mediaType={MEDIA_TYPE.Movie} />
        {[...COMMON_TITLES, ...genres].map((genre: Genre | CustomGenre) => (
          <Placeholder />
        ))}
      </Stack>
    );
  }
  return null;
}

Component.displayName = 'HomePage';
