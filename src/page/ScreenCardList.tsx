import styled from 'styled-components';
import NewCardCreator from '../components/NewCardCreator';
import CardList from '../components/List/CardList';

const ScreenCardList = () => {
  return (
    <StyledWrapper>
      <NewCardCreator />
      <CardList />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 700px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 5px #444;
  background-color: #444;
  box-sizing: border-box;
  overflow: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  * {
    box-sizing: border-box;
  }
`;

export default ScreenCardList;
