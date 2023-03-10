import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={500}
    viewBox='0 0 300 500'
    backgroundColor='#e6e3ed'
    foregroundColor='#ecebeb'
  >
    <rect x='105' y='447' rx='0' ry='0' width='0' height='1' />
    <rect x='12' y='4' rx='10' ry='10' width='273' height='279' />
    <rect x='8' y='350' rx='10' ry='10' width='277' height='81' />
    <rect x='128' y='445' rx='10' ry='10' width='154' height='45' />
    <rect x='9' y='448' rx='10' ry='10' width='92' height='39' />
    <rect x='9' y='303' rx='10' ry='10' width='278' height='31' />
  </ContentLoader>
);
