import { styled } from '@mui/system';
import { Colors } from '@ui/styles/UIColors';

export const LoadMore = styled('div')({
  marginTop: '25px',
  marginBottom: '25px',
  textAlign: 'center'
});

export const UserItem = styled('div')({
  minWidth: 400,
  position: 'relative',
  display: 'block',
  maxWidth: 800,
  margin: '25px auto',
  height: 140,
  borderRadius: 20,
  backgroundColor: Colors.postColor
});

export const UserElement = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
});

export const UserImage = styled('div')({
  margin: 20,
  height: 100
});

export const UserImageContent = styled('img')({
  height: '100%',
  borderRadius: 250
});

export const User = styled('div')(
  {
    margin: 20
  },
  (props: { full: boolean }) => ({
    left: !props.full ? 250 : 20,
    width: !props.full ? 'calc(100% - 200px)' : 'calc(100% - 60px)'
  })
);

export const Username = styled('div')(
  {
    fontSize: 16,
    fontWeight: 'bold'
  },
  (props: { clickable: boolean }) => ({
    cursor: !props.clickable ? 'auto' : 'pointer'
  })
);

export const Name = styled('div')({
  marginTop: 20,
  width: '100%'
});
