import { styled } from '@mui/system';
import { Colors } from '@ui/styles/UIColors';

export const PostListContainer = styled('div')({
  minWidth: 400,
  margin: '25px auto',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center'
});

export const PostItem = styled('div')({
  margin: 25,
  width: 400,
  position: 'relative',
  // display: 'block',
  // margin: '25px auto',
  // border: '1px solid lightgray',
  // boxShadow: '5px 10px lightgray',
  height: 500,
  borderRadius: 20,
  backgroundColor: Colors.postColor
});

export const PostElement = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
});

export const PostImage = styled('div')({
  width: '100%',
  borderRadius: 20
});

export const PostImageContent = styled('img')({
  width: '100%',
  borderRadius: '20px 20px 0 0'
});

export const Post = styled('div')({
  margin: 20
});

export const PostTags = styled('div')({
  fontSize: 12,
  display: 'inline-flex',
  marginBottom: 10
});

export const PostTag = styled('div')(
  {
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  (props: { isFirst: boolean }) => ({
    marginLeft: props.isFirst ? 0 : 5
  })
);

export const PostTitle = styled('div')({
  fontSize: 16,
  fontWeight: 'bold',
  cursor: 'pointer'
});

export const PostContent = styled('div')({
  marginTop: 20,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%'
});

export const PostDescription = styled('div')({
  position: 'absolute',
  fontSize: 12,
  bottom: 20,
  display: 'inline-flex'
});

export const PostUsername = styled('div')({
  cursor: 'pointer',
  textDecoration: 'underline',
  marginLeft: 10
});

export const LoadMore = styled('div')({
  marginTop: '25px',
  marginBottom: '25px',
  textAlign: 'center'
});

export const PostBig = styled('div')({
  position: 'relative',
  display: 'block',
  maxWidth: 800,
  minWidth: 400,
  margin: '25px auto',
  // border: '1px solid lightgray',
  // boxShadow: '5px 10px lightgray',
  minHeight: 400,
  borderRadius: 20,
  backgroundColor: Colors.postColor
});

export const PostBigImage = styled('div')({
  borderRadius: 20,
  display: 'block',
  textAlign: 'center'
});

export const PostBigImageContent = styled('img')({
  width: '100%',
  borderRadius: '20px 20px 0 0'
});

export const PostBigTitle = styled('div')({
  fontSize: 16,
  fontWeight: 'bold',
  display: 'block'
});

export const PostBigContent = styled('div')({
  marginTop: 20,
  display: 'block',
  paddingBottom: 100
});

export const PostBigDescription = styled('div')({
  position: 'absolute',
  fontSize: 12,
  bottom: 20,
  left: 20,
  display: 'inline-flex'
});

export const PostTitleUsername = styled('div')({
  fontSize: 16,
  display: 'block',
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: 20
});

export const BackButton = styled('div')({
  position: 'absolute',
  margin: '10px 25px'
});

export const PostButton = styled('div')({
  position: 'absolute',
  top: 0,
  right: 10
});
