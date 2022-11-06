import { ThreeDots } from 'react-loader-spinner';
import { ThreeDotsWrapper } from './Loader.styles';

export const Loader = () => {
  return (
    <ThreeDotsWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#008080"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </ThreeDotsWrapper>
  );
};